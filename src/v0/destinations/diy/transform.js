/* eslint-disable no-nested-ternary */
const get = require('get-value');
const { ConfigurationError, InstrumentationError } = require('@rudderstack/integrations-lib');
const { defaultRequestConfig, getHashFromArray, simpleProcessRouterDest } = require('../../util');
const { removePrefix, handleMappings } = require('./utils');
const { EventType } = require('../../../constants');

const buildRequestPayload = (payload, method, headers, params, endpoint) => {
  const response = defaultRequestConfig();
  response.method = method;
  if (method === 'GET') {
    response.params = { ...params, payload };
  } else {
    response.params = params;
    response.body.JSON = payload;
  }
  response.headers = headers;
  response.endpoint = endpoint;
  return response;
};

const trackResponseBuilder = (message, destination) => {
  const { track } = destination.Config?.eventsMapping || destination.config.eventsMapping;
  const respList = [];
  /*
    [
        {
            "trackEventName": "Product Added",
            "trackEndpoint": "https://www.test.com/user/{userId}",
            "trackMethod": "PUT",
            "trackHeaders": [
                {
                    "from": "content-type",
                    "to": "application/json"
                }
            ],
            "trackQueryParams": [
                {
                    "from": "queryparam",
                    "to": "123"
                }
            ],
            "trackPathVariables": [
                {
                    "from": "userId",
                    "to": "$.event.userId"
                }
            ]
        }
    ]
    */
  const eventRequest = track.filter((key) => message.event === key.event);
  eventRequest.forEach((request) => {
    const { endpoint, method, headers, queryParams, pathVariables, mappings } = request;
    const headersObject = handleMappings(message, headers, 'value', 'key');
    const params = handleMappings(message, queryParams, 'value', 'key');
    const pathVariablesObj = getHashFromArray(pathVariables, 'pathVariable', 'pathValue', false);
    const payload = handleMappings(message, mappings);
    payload.maxBatchSize = batchSize;
    const updatedEndpoint = endpoint.replace(/{(\w+)}/g, (_, key) => {
      if (!pathVariablesObj[key]) {
        throw new Error(`Key ${key} not found in the pathVariables`);
      }
      return get(message, removePrefix(pathVariablesObj[key]));
    });
    if (endpoint.length === 0) {
      throw new ConfigurationError('Endpoint is missing');
    }
    respList.push(buildRequestPayload(payload, method, headersObject, params, updatedEndpoint));
  });
  return respList;
};
const identifyResponseBuilder = (message, destination) => {
  /* 
    Example Config :     {
        "http-connectionMode": "cloud",
        "connectionMode": {
            "cloud": "cloud"
        },
        "identify": [
            {
                "identifyEndpoint": "https://www.test.com/user/{userId}",
                "identifyMethod": "POST",
                "identifyHeaders": [
                    {
                        "from": "content-type",
                        "to": "application/json"
                    }
                ],
                "identifyQueryParams": [
                    {
                        "from": "queryParam",
                        "to": "123"
                    }
                ],
                "identifyPathVariables": [
                    {
                        "from": "userId",
                        "to": "$.events.userId"
                    }
                ]
            }
        ]
    }
    */
  const { identify } = destination.Config?.eventsMapping || destination.config.eventsMapping;
  const respList = [];
  identify.forEach((request) => {
    const { endpoint, method, headers, queryParams, pathVariables, mappings } = request;
    const headersObject = handleMappings(message, headers, 'value', 'key');
    const params = handleMappings(message, queryParams, 'value', 'key');
    const pathVariablesObj = getHashFromArray(pathVariables, 'pathVariable', 'pathValue', false);
    const payload = handleMappings(message, mappings);
    const updatedEndpoint = endpoint.replace(/{(\w+)}/g, (_, key) => {
      if (!pathVariablesObj[key]) {
        throw new Error(`Key ${key} not found in the pathVariables`);
      }
      return get(message, removePrefix(pathVariablesObj[key]));
    });
    if (endpoint.length === 0) {
      throw new ConfigurationError('Endpoint is missing');
    }
    respList.push(buildRequestPayload(payload, method, headersObject, params, updatedEndpoint));
  });
  return respList;
};
const processEvent = (event) => {
  const { message, destination } = event;
  const { type } = message;
  let response;
  switch (type) {
    case EventType.IDENTIFY:
      response = identifyResponseBuilder(message, destination);
      break;
    case EventType.TRACK:
      response = trackResponseBuilder(message, destination);
      break;
    default:
      throw new InstrumentationError(`Message type ${type} not supported`);
  }
  return response;
};
const process = (event) => {
  const response = processEvent(event);
  return response;
};

const processRouterDest = (inputs, reqMetadata) => {
  const respList = simpleProcessRouterDest(inputs, process, reqMetadata);
  return respList;
};

module.exports = { processEvent, process, processRouterDest };