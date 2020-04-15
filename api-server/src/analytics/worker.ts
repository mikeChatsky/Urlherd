import { expose } from 'threads';

import elastic from '../config/elasticsearch-client';
import { AnalyticsWorker } from '../types/analytics';

const analytics: AnalyticsWorker = {
  recordRequest: async (resourceId, request) => {
    await elastic.index({
      index: 'batchurl-record',
      body: {
        resourceId,
        request: request
      }
    });
  }
};

expose(analytics);
