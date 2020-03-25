import fp from 'fastify-plugin';
import { FastifyError } from 'fastify';
import { MAPPER_PLUGIN } from './dynamodb-mapper.plugin';
import { PluggedFastifyInstance } from '../types/fastify';

interface Model<T> {
  new (): T;
}

export interface Provider {
  getById<T>(model: Model<T>, id: string): Promise<T>;
  put<T>(model: Model<T>, content: any): Promise<string>;
}

export default fp((fastify: PluggedFastifyInstance, opts, next) => {
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

  fastify.decorate('store', store, [MAPPER_PLUGIN]);

  next();
});
