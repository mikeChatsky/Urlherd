import fp from 'fastify-plugin';
import elastic from '../config/elasticsearch-client';

export const ELASTIC_PLUGIN = 'elastic';

export default fp((fastify, opts, next) => {
  fastify.decorate(ELASTIC_PLUGIN, elastic);

  next();
});
