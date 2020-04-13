import fp from 'fastify-plugin';
import elastic from '../config/elasticsearch-client';
import { ELASTIC_PLUGIN } from '.';

export = fp(
  (fastify, opts, next) => {
    fastify.decorate(ELASTIC_PLUGIN, elastic);

    next();
  },
  { name: ELASTIC_PLUGIN }
);
