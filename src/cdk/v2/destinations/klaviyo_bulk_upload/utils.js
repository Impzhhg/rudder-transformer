const locationAttributes = [
  'address1',
  'address2',
  'city',
  'country',
  'latitude',
  'longitude',
  'region',
  'zip',
  'ip',
];

function removeLocationAttributes(traits) {
  const finalObject = {};
  return Object.keys(traits).reduce((result, key) => {
    if (!locationAttributes.includes(key)) {
      finalObject[key] = traits[key];
    }
    return finalObject;
  }, {});
}

function generateLocationObject({
  traits: { address1, address2, city, country, latitude, longitude, region, zip, ip },
}) {
  return {
    address1,
    address2,
    city,
    country,
    latitude,
    longitude,
    region,
    zip,
    ip,
  };
}

function transformSingleMessage(data, metadata) {
  const { context, traits } = data;
  const location = generateLocationObject(data);
  const { jobId } = metadata;
  const traitsWithoutLocation = removeLocationAttributes(traits);
  const transformedSinglePayload = {
    type: 'profile',
    attributes: {
      ...traitsWithoutLocation,
      location,
      anonymous_id: context.externalId[0].id,
      jobIdentifier: `${context.externalId[0].id}:${jobId}`,
    },
  };
  if (context.externalId[0].identifierType === 'id') {
    transformedSinglePayload.id = context.externalId[0].id || traits.id;
    transformedSinglePayload.attributes.anonymous_id = context.externalId[0].id;
  }
  return transformedSinglePayload;
}

function wrapCombinePayloads(transformedInputs, destinationObj) {
  if (destinationObj.Config.listId) {
    return {
      payload: {
        data: {
          type: 'profile-bulk-import-job',
          attributes: {
            profiles: {
              data: transformedInputs,
            },
          },
          relationships: {
            lists: {
              data: [
                {
                  type: 'list',
                  id: destinationObj.Config.listId,
                },
              ],
            },
          },
        },
      },
      destination: destinationObj,
    };
  }
  return {
    payload: {
      data: {
        type: 'profile-bulk-import-job',
        attributes: {
          profiles: {
            data: transformedInputs,
          },
        },
      },
    },
    destination: destinationObj,
  };
}

function combinePayloads(inputs) {
  const transformedInputs = inputs.map((input) => {
    const { message, metadata } = input;
    return transformSingleMessage(message, metadata);
  });
  const destinationObj = inputs[inputs.length - 1].destination;

  const { payload } = wrapCombinePayloads(transformedInputs, destinationObj);
  return { ...payload };
}

module.exports = { transformSingleMessage, combinePayloads };
