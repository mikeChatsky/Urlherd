import fp from 'fastify-plugin';
import mapper from '../config/dynamodb-mapper';

export default fp((fastify, opts, next) => {
  fastify.decorate('mapper', mapper());

  next();
});
