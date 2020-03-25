import fp from 'fastify-plugin';
import mapper from '../config/dynamodb-mapper';

export const MAPPER_PLUGIN = 'mapper';

export default fp((fastify, opts, next) => {
  fastify.decorate(MAPPER_PLUGIN, mapper());

  next();
});
