import fp from 'fastify-plugin';
import mapper from '../config/dynamodb-mapper';
import { MAPPER_PLUGIN } from '.';

export = fp(
  (fastify, opts, next) => {
    fastify.decorate(MAPPER_PLUGIN, mapper());

    next();
  },
  { name: MAPPER_PLUGIN }
);
