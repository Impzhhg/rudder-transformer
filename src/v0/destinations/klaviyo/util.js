const { defaultRequestConfig } = require('rudder-transformer-cdk/build/utils');
const lodash = require('lodash');
const { NetworkError, InstrumentationError } = require('@rudderstack/integrations-lib');
const { WhiteListedTraits } = require('../../../constants');
const {
  constructPayload,
  getFieldValueFromMessage,
  defaultPostRequestConfig,
  extractCustomFields,
  removeUndefinedAndNullValues,
  defaultBatchRequestConfig,
  getSuccessRespEvents,
  flattenJson,
  defaultPatchRequestConfig,
  isDefinedAndNotNull,
  getDestinationExternalID,
  getIntegrationsObj,
} = require('../../util');
const tags = require('../../util/tags');
const { handleHttpRequest } = require('../../../adapters/network');
const { JSON_MIME_TYPE, HTTP_STATUS_CODES } = require('../../util/constant');
const { getDynamicErrorType } = require('../../../adapters/utils/networkUtils');
const {
  BASE_ENDPOINT,
  MAPPING_CONFIG,
  CONFIG_CATEGORIES,
  MAX_BATCH_SIZE,
  WhiteListedTraitsV2,
  revision,
} = require('./config');

const REVISION_CONSTANT = '2023-02-22';

/**
 * This function calls the create user endpoint ref: https://developers.klaviyo.com/en/reference/create_profile
 * If the user doesn't exist, it creates a profile for the user and return 201 status code and the response which contains all the profile data
 * and profileId.
 * If the user already exists, it return 409 status code and a response which contains the profileId for that existing user, which can be used to
 * update the profile
 * @param {*} endpoint
 * @param {*} payload
 * @param {*} requestOptions
 * @returns
 */
const getIdFromNewOrExistingProfile = async ({ endpoint, payload, requestOptions, metadata }) => {
  let response;
  let profileId;
  const endpointPath = '/api/profiles';
  const { processedResponse: resp } = await handleHttpRequest(
    'post',
    endpoint,
    payload,
    requestOptions,
    {
      destType: 'klaviyo',
      feature: 'transformation',
      endpointPath,
      requestMethod: 'POST',
      module: 'router',
      metadata,
    },
  );

  /**
   * 201 - profile is created with updated payload no need to update it again (suppress event with 299 status code)
   * 409 - profile is already exist, it needs to get updated
   */
  if (resp.status === HTTP_STATUS_CODES.CREATED) {
    profileId = resp.response?.data?.id;
    const { data } = resp.response;
    response = { id: data.id, attributes: data.attributes };
  } else if (resp.status === HTTP_STATUS_CODES.CONFLICT) {
    const { errors } = resp.response;
    profileId = errors?.[0]?.meta?.duplicate_profile_id;
  }

  if (profileId) {
    return { profileId, response, statusCode: resp.status };
  }

  let statusCode = resp.status;
  if (resp.status === 201 || resp.status === 409) {
    // retryable error if the profile id is not found in the response
    statusCode = 500;
  }

  throw new NetworkError(
    `Failed to create user due to ${JSON.stringify(resp.response)}`,
    statusCode,
    {
      [tags.TAG_NAMES.ERROR_TYPE]: getDynamicErrorType(statusCode),
    },
    `${JSON.stringify(resp.response)}`,
  );
};

/**
 * Update profile response builder
 * @param {*} payload
 * @param {*} profileId
 * @param {*} category
 * @param {*} privateApiKey
 * @returns
 */
const profileUpdateResponseBuilder = (payload, profileId, category, privateApiKey) => {
  const updatedPayload = payload;
  const identifyResponse = defaultRequestConfig();
  updatedPayload.data.id = profileId;
  identifyResponse.endpoint = `${BASE_ENDPOINT}${category.apiUrl}/${profileId}`;
  identifyResponse.method = defaultPatchRequestConfig.requestMethod;
  identifyResponse.headers = {
    Authorization: `Klaviyo-API-Key ${privateApiKey}`,
    'Content-Type': JSON_MIME_TYPE,
    Accept: JSON_MIME_TYPE,
    revision: REVISION_CONSTANT,
  };
  identifyResponse.body.JSON = removeUndefinedAndNullValues(payload);
  return identifyResponse;
};

/**
 * This function is used for creating response for subscribing users to a particular list.
 * DOCS: https://developers.klaviyo.com/en/v2023-02-22/reference/subscribe_profiles
 */
const subscribeUserToList = (message, traitsInfo, destination) => {
  // listId from message properties are preferred over Config listId
  const { privateApiKey, consent } = destination.Config;
  let { listId } = destination.Config;
  const targetUrl = `${BASE_ENDPOINT}/api/profile-subscription-bulk-create-jobs`;
  const subscriptionObj = {
    email: getFieldValueFromMessage(message, 'email'),
    phone_number: getFieldValueFromMessage(message, 'phone'),
  };

  if (traitsInfo?.properties?.consent || consent) {
    const subscribeConsent = traitsInfo?.properties?.consent || consent;
    const channels = {};

    let subscribeConsentArr = subscribeConsent;
    if (!Array.isArray(subscribeConsentArr)) {
      subscribeConsentArr = [subscribeConsent];
    }

    if (subscribeConsentArr.includes('email')) {
      channels.email = ['MARKETING'];
    }
    if (subscribeConsentArr.includes('sms')) {
      channels.sms = ['MARKETING'];
    }
    subscriptionObj.channels = channels;
  }
  const subscriptions = [removeUndefinedAndNullValues(subscriptionObj)];
  if (traitsInfo?.properties?.listId) {
    listId = traitsInfo.properties.listId;
  }
  if (message.type === 'group') {
    listId = message.groupId;
  }
  const attributes = {
    list_id: listId,
    subscriptions,
  };
  const data = {
    type: 'profile-subscription-bulk-create-job',
    attributes,
  };
  const payload = { data };
  const response = defaultRequestConfig();
  response.method = defaultPostRequestConfig.requestMethod;
  response.endpoint = targetUrl;
  response.headers = {
    Authorization: `Klaviyo-API-Key ${privateApiKey}`,
    'Content-Type': JSON_MIME_TYPE,
    Accept: JSON_MIME_TYPE,
    revision: REVISION_CONSTANT,
  };
  response.body.JSON = removeUndefinedAndNullValues(payload);

  return response;
};

// This function is used for creating and returning customer properties using mapping json
const createCustomerProperties = (message, Config) => {
  const { enforceEmailAsPrimary } = Config;
  let customerProperties = constructPayload(
    message,
    MAPPING_CONFIG[CONFIG_CATEGORIES.PROFILE.name],
  );
  if (!enforceEmailAsPrimary) {
    customerProperties.$id = getFieldValueFromMessage(message, 'userId');
  } else {
    if (!customerProperties.$email && !customerProperties.$phone_number) {
      throw new InstrumentationError('None of email and phone are present in the payload');
    }
    customerProperties = {
      ...customerProperties,
      _id: getFieldValueFromMessage(message, 'userId'),
    };
  }
  customerProperties = removeUndefinedAndNullValues(customerProperties);
  return customerProperties;
};

const populateCustomFieldsFromTraits = (message) => {
  // Extract other K-V property from traits about user custom properties
  let customProperties = {};
  customProperties = extractCustomFields(
    message,
    customProperties,
    ['traits', 'context.traits'],
    WhiteListedTraits,
  );
  return customProperties;
};

const generateBatchedPaylaodForArray = (events, version) => {
  let batchEventResponse = defaultBatchRequestConfig();
  const batchResponseList = [];
  const metadata = [];
  // extracting destination from the first event in a batch
  const { destination } = events[0];
  // Batch event into dest batch structure
  events.forEach((ev, index) => {
    if (index === 0) {
      batchResponseList.push(ev.message.body.JSON);
    } else if (version === 'v2') {
      batchResponseList[0].data.attributes.profiles.data.push(
        ...ev.message.body.JSON.data.attributes.profiles.data,
      );
    } else {
      batchResponseList[0].data.attributes.subscriptions.push(
        ...ev.message.body.JSON.data.attributes.subscriptions,
      );
    }
    metadata.push(ev.metadata);
  });

  batchEventResponse.batchedRequest = Object.values(batchEventResponse);
  batchEventResponse.batchedRequest[0].body.JSON = {
    data: batchResponseList[0].data,
  };

  const BATCH_ENDPOINT = `${BASE_ENDPOINT}/api/profile-subscription-bulk-create-jobs`;

  batchEventResponse.batchedRequest[0].endpoint = BATCH_ENDPOINT;

  batchEventResponse.batchedRequest[0].headers = {
    Authorization: `Klaviyo-API-Key ${destination.Config.privateApiKey}`,
    'Content-Type': JSON_MIME_TYPE,
    Accept: JSON_MIME_TYPE,
    revision: REVISION_CONSTANT,
  };

  batchEventResponse = {
    ...batchEventResponse,
    metadata,
    destination,
  };
  return batchEventResponse;
};

/**
 * It takes list of subscribe responses and groups them on the basis of listId
 * @param {*} subscribeResponseList
 * @param {*} version this parameter to know the API and accordingly fetch listId from payload from right place
 * @returns
 */
const groupSubscribeResponsesUsingListId = (subscribeResponseList, version) => {
  const subscribeEventGroups = lodash.groupBy(subscribeResponseList, (event) =>
    version === 'v2'
      ? event.message.body.JSON.data.relationships.list.data.id
      : event.message.body.JSON.data.attributes.list_id,
  );
  return subscribeEventGroups;
};

const getBatchedResponseList = (subscribeEventGroups, identifyResponseList, version) => {
  let batchedResponseList = [];
  Object.keys(subscribeEventGroups).forEach((listId) => {
    // eventChunks = [[e1,e2,e3,..batchSize],[e1,e2,e3,..batchSize]..]
    const eventChunks = lodash.chunk(subscribeEventGroups[listId], MAX_BATCH_SIZE);
    const batchedResponse = eventChunks.map((chunk) => {
      const batchEventResponse = generateBatchedPaylaodForArray(chunk, version);
      return getSuccessRespEvents(
        batchEventResponse.batchedRequest,
        batchEventResponse.metadata,
        batchEventResponse.destination,
        true,
      );
    });
    batchedResponseList = [...batchedResponseList, ...batchedResponse];
  });

  if (identifyResponseList.length > 0) {
    identifyResponseList.forEach((response) => {
      batchedResponseList[0].batchedRequest.push(response);
    });
  }

  return batchedResponseList;
};

const batchSubscribeEvents = (subscribeRespList, version = 'v1') => {
  const identifyResponseList = [];
  subscribeRespList.forEach((event) => {
    const processedEvent = event;
    // for group and identify events (it will contain only subscribe response)
    if (processedEvent.message.length === 2) {
      // the array will contain one update profile reponse and one subscribe reponse
      identifyResponseList.push(event.message[0]);
      [processedEvent.message] = event.message.slice(1);
    } else {
      // for group events (it will contain only subscribe response)
      [processedEvent.message] = event.message.slice(0);
    }
  });

  const subscribeEventGroups = groupSubscribeResponsesUsingListId(subscribeRespList, version);

  const batchedResponseList = getBatchedResponseList(
    subscribeEventGroups,
    identifyResponseList,
    version,
  );

  return batchedResponseList;
};

/**
 * This function generates the metadat object used for updating a list attribute and unset properties 
 * message = {
    integrations: {
      Klaviyo: { fieldsToUnset: ['Unset1', 'Unset2'],
      fieldsToAppend: ['appendList1', 'appendList2'],
      fieldsToAppend: ['unappendList1', 'unappendList2']
      },
      All: true,
    },
  };
  Output metadata = {
        "meta": {
            "patch_properties": {
                "append": {
                    "appendList1": "New Value 1",
                    "appendList2": "New Value 2"
                },
                "unappend": {
                    "unappendList1": "Old Value 1",
                    "unappendList2": "Old Value 2"
                },
                "unset": ['Unset1', 'Unset2']
            }
        }
      }
 * @param {*} message 
 */
const getProfileMetadataAndMetadataFields = (message) => {
  const intgObj = getIntegrationsObj(message, 'Klaviyo');
  const meta = { patch_properties: {} };
  let metadataFields = [];
  const traitsInfo = getFieldValueFromMessage(message, 'traits');
  // fetch and set fields to unset
  const fieldsToUnset = intgObj?.fieldsToUnset;
  if (Array.isArray(fieldsToUnset)) {
    meta.patch_properties.unset = fieldsToUnset;
    metadataFields = fieldsToUnset;
  }

  // fetch list of fields to append , their value and append these fields in metadataFields
  const fieldsToAppend = intgObj?.fieldsToAppend;
  if (Array.isArray(fieldsToAppend)) {
    const append = {};
    fieldsToAppend.forEach((key) => {
      if (isDefinedAndNotNull(traitsInfo[key])) {
        append[key] = traitsInfo[key];
      }
    });
    meta.patch_properties.append = append;
    metadataFields = metadataFields.concat(fieldsToAppend);
  }

  // fetch list of fields to unappend , their value and append these fields in metadataFields
  const fieldsToUnappend = intgObj?.fieldsToUnappend;
  if (Array.isArray(fieldsToUnappend)) {
    const unappend = {};
    fieldsToUnappend.forEach((key) => {
      if (isDefinedAndNotNull(traitsInfo[key])) {
        unappend[key] = traitsInfo[key];
      }
    });
    meta.patch_properties.unappend = unappend;
    metadataFields = metadataFields.concat(fieldsToUnappend);
  }

  return { meta, metadataFields };
};

/**
 * Following function is used to construct profile object for version 15-06-2024
 * If we have isIdentifyCall as true then there are two extra scenarios
 *  1. `enforceEmailAsPrimary` config kicks in and if email or phone is not present we throw an error
 *  2. Place of Metadata object in payload for klaviyo is a little but different
 * @param {*} message input to build output from
 * @param {*} destination dest object with config
 * @param {*} isIdentifyCall let us know if processing is done for identify call
 * @returns profile object
 * https://developers.klaviyo.com/en/reference/create_or_update_profile
 */
const constructProfile = (message, destination, isIdentifyCall) => {
  const profileAttributes = constructPayload(
    message,
    MAPPING_CONFIG[CONFIG_CATEGORIES.PROFILEV2.name],
  );
  const { enforceEmailAsPrimary, flattenProperties } = destination.Config;
  let customPropertyPayload = {};
  const { meta, metadataFields } = getProfileMetadataAndMetadataFields(message);
  customPropertyPayload = extractCustomFields(
    message,
    customPropertyPayload,
    ['traits', 'context.traits'],
    // omitting whitelistedTraitsV2 and metadatafields from constructing custom properties as these are already used
    [...WhiteListedTraitsV2, ...metadataFields],
  );
  const profileId = getDestinationExternalID(message, 'klaviyo-profileId');
  // if flattenProperties is enabled from UI, flatten the user properties
  customPropertyPayload = flattenProperties
    ? flattenJson(customPropertyPayload, '.', 'normal', false)
    : customPropertyPayload;
  if (isIdentifyCall && enforceEmailAsPrimary) {
    if (!profileAttributes.email && !profileAttributes.phone_number && !profileId) {
      throw new InstrumentationError('None of email and phone are present in the payload');
    }
    delete profileAttributes.external_id; // so that multiple profiles are not found, one w.r.t email and one for external_id
    customPropertyPayload = {
      ...customPropertyPayload,
      _id: getFieldValueFromMessage(message, 'userIdOnly'), // custom attribute
    };
  }
  const data = removeUndefinedAndNullValues({
    type: 'profile',
    id: profileId,
    attributes: {
      ...profileAttributes,
      properties: removeUndefinedAndNullValues(customPropertyPayload),
      meta,
    },
  });
  if (isIdentifyCall) {
    // For identify call meta object comes inside
    data.metadata = meta;
    delete data.attributes.meta;
  }

  return { data };
};

/**
 * This function is used for creating response for subscribing users to a particular list for V2
 * DOCS: https://developers.klaviyo.com/en/reference/subscribe_profiles
 */
const subscribeUserToListV2 = (message, traitsInfo, destination) => {
  // listId from message properties are preferred over Config listId
  const { privateApiKey, consent } = destination.Config;
  let { listId } = destination.Config;
  let subscribeConsent = traitsInfo?.properties?.consent || consent;
  const subscriptions = {};
  const email = getFieldValueFromMessage(message, 'email');
  const phone = getFieldValueFromMessage(message, 'phone');
  if (subscribeConsent) {
    if (!Array.isArray(subscribeConsent)) {
      subscribeConsent = [subscribeConsent];
    }
    if (subscribeConsent.includes('email') && email) {
      subscriptions.email.marketing.consent = 'SUBSCRIBED';
    }
    if (subscribeConsent.includes('sms') && phone) {
      subscriptions.sms.marketing.consent = 'SUBSCRIBED';
    }
  }
  const profileAttributes = {
    email,
    phone_number: phone,
    subscriptions,
  };
  const profile = removeUndefinedAndNullValues({
    type: 'profile',
    id: getDestinationExternalID(message, 'klaviyo-profileId'),
    attributes: removeUndefinedAndNullValues(profileAttributes),
  });
  if (!email && !phone && profile.id) {
    throw new InstrumentationError(
      'Profile Id, Email or/and Phone are required to subscribe to a list',
    );
  }
  // fetch list id from message
  if (traitsInfo?.properties?.listId) {
    // for identify call
    listId = traitsInfo.properties.listId;
  }
  if (message.type === 'group') {
    listId = message.groupId;
  }

  const payload = {
    data: {
      type: 'profile-subscription-bulk-create-job',
      attributes: { profiles: { data: [profile] } },
      relationships: {
        list: {
          data: {
            type: 'list',
            id: listId,
          },
        },
      },
    },
  };
  const response = defaultRequestConfig();
  response.method = defaultPostRequestConfig.requestMethod;
  response.endpoint = `${BASE_ENDPOINT}/api/profile-subscription-bulk-create-jobs`;
  response.headers = {
    Authorization: `Klaviyo-API-Key ${privateApiKey}`,
    'Content-Type': JSON_MIME_TYPE,
    Accept: JSON_MIME_TYPE,
    revision,
  };
  response.body.JSON = removeUndefinedAndNullValues(payload);

  return response;
};

module.exports = {
  subscribeUserToList,
  createCustomerProperties,
  populateCustomFieldsFromTraits,
  generateBatchedPaylaodForArray,
  batchSubscribeEvents,
  profileUpdateResponseBuilder,
  getIdFromNewOrExistingProfile,
  constructProfile,
  subscribeUserToListV2,
  getProfileMetadataAndMetadataFields,
};
