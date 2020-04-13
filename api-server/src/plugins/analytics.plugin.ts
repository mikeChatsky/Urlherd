import fp from 'fastify-plugin';
import { FastifyRequest } from 'fastify';

import { PluggedFastifyInstance } from '../types/fastify';
import { ANALYTICS_PLUGIN, ELASTIC_PLUGIN } from '.';
import { analyticsService } from '../types/plugins';

export = fp(
  (fastify: PluggedFastifyInstance, opts, next) => {
    const analytics: analyticsService = {
      recordRequest: (resourceId, request) => {
        fastify.elastic.index({ index: resourceId, body: request });
      }
    };

    fastify.decorate(ANALYTICS_PLUGIN, analytics);

    next();
  },
  { name: ANALYTICS_PLUGIN, dependencies: [ELASTIC_PLUGIN] }
);
