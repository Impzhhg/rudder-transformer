/* eslint-disable no-param-reassign */
import { Context } from 'koa';
import axios from 'axios';
import { ProcessorTransformationRequest, RouterTransformationRequestData } from '../../types/index';
import { isEmptyObject } from '../../v0/util';

export class DestinationPreTransformationService {
  public static async preProcess(
    events: ProcessorTransformationRequest[] | RouterTransformationRequestData[],
    ctx: Context,
  ) {
    const reqParams = ctx.request.query;
    const eventsProcessed = events.map(
      (event: ProcessorTransformationRequest | RouterTransformationRequestData) => {
        // eslint-disable-next-line no-param-reassign
        event.request = { query: reqParams };
        return event;
      },
    );

    console.log('pre process destination config ', JSON.stringify(eventsProcessed));

    const ids = Array.from(
      eventsProcessed.map((event) => event.destination?.Config?.customMappingId),
    );
    const payload = {
      ids,
    };
    try {
      const response = await axios({
        url: 'http://localhost:5050/dataplane/customMapping',
        data: payload,
        method: 'get',
      });

      const { data } = response;
      if (!isEmptyObject(data)) {
        eventsProcessed.forEach((event) => {
          if (event.destination?.Config?.customMappingId) {
            event.destination.Config.eventsMapping =
              data[event.destination.Config.customMappingId].eventsMapping;
          }
        });
      }

      // console.log('Updated events:', eventsProcessed);
    } catch (error) {
      console.error('Error:', error);
    }

    console.log('processed destination config ', JSON.stringify(eventsProcessed));
    return eventsProcessed;
  }
}
