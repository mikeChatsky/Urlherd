import fp from 'fastify-plugin';
import { FastifyError } from 'fastify';

import { PluggedFastifyInstance } from '../types/fastify';
import { MAPPER_PLUGIN, STORE_PLUGIN } from '.';
import { Provider } from '../types/plugins';

export = fp(
  (fastify: PluggedFastifyInstance, opts, next) => {
    const store: Provider = {
      getById: async (model, id) => {
        try {
          return await fastify.mapper.get(Object.assign(new model(), { id }));
        } catch (error) {
          let statusCode = 500;
          let message: string;

          if (error.name === 'ItemNotFoundException') {
            statusCode = 404;
            message = `item of type ${model.constructor.name} with id ${id} was not found`;
          }

          const err: FastifyError = {
            statusCode,
            message,
            stack: error.stack,
            name: 'FST_ERR_NOT_FOUND'
          };
          throw err;
        }
      },
      put: async (model, content) => {
        const newBookmark = Object.assign(new model(), content);
        const { id } = await fastify.mapper.put(newBookmark);

        return id;
      }
    };

    fastify.decorate(STORE_PLUGIN, store);

    next();
  },
  { name: STORE_PLUGIN, dependencies: [MAPPER_PLUGIN] }
);
