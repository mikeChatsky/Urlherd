import fp from 'fastify-plugin';

import { ANALYTICS_PLUGIN, ELASTIC_PLUGIN } from '.';
import { PluggedFastifyInstance } from '../types/fastify';
import Analytics from '../analytics';

export = fp(
  (fastify: PluggedFastifyInstance, _opts, next) => {
    fastify.decorate(ANALYTICS_PLUGIN, new Analytics(fastify.log));

    next();
  },
  { name: ANALYTICS_PLUGIN, dependencies: [ELASTIC_PLUGIN] }
);
