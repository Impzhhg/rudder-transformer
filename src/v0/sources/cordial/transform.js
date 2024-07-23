const path = require('path');
const fs = require('fs');
const md5 = require('md5');
const Message = require('../message');
const { CommonUtils } = require('../../../util/common');
const { generateUUID, isDefinedAndNotNull } = require('../../util');
const { eventsMapping } = require('./config');

const mapping = JSON.parse(fs.readFileSync(path.resolve(__dirname, './mapping.json'), 'utf-8'));

const processEvent = (event) => {
  const message = new Message(`Cordial`);
  let eventName = event.event?.a || event.event?.action;
  if (Object.keys(eventsMapping).includes(eventName)) {
    eventName = eventsMapping[eventName];
  }
  message.setEventType('track');
  message.setEventName(eventName);
  message.setPropertiesV2(event, mapping);

  const externalId = [];
  // setting up cordial contact_id to externalId
  if (event.cID) {
    externalId.push({
      type: 'cordialContactId',
      id: event.cID,
    });
  }
  message.context.externalId = externalId;

  if (!message.userId && event.email) {
    // Treating userId as unique identifier
    // If userId is not present, then generating it from email using md5 hash function
    message.userId = md5(event.email);
  }
  if (!isDefinedAndNotNull(message.userId)) {
    message.anonymousId = generateUUID();
  }
  // Due to multiple mappings to the same destination path object some are not showing up due to which we are doing the following
  message.context.traits = { ...message.context.traits, ...event.contact };
  message.properties = { ...message.properties, ...event.event.properties, ...event.event };
  delete message.properties.properties;
  return message;
};

const process = (events) => {
  const eventsArray = CommonUtils.toArray(events);
  return eventsArray.map(processEvent);
};

module.exports = { process };
