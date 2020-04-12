import BookmarkModel from '../models/bookmark/bookmark.model';
import { PluggedFastifyInstance } from 'src/types/fastify';
import { ID_LENGTH } from '../models/Id';

export default async function (fastify: PluggedFastifyInstance) {
  fastify.post(
    '/bookmark',
    {
      schema: {
        body: {
          type: 'array',
          items: { type: 'string', pattern: '\\w+:(\\/?\\/?)[^s]+' }
        }
      }
    },
    async (request, reply) =>
      reply.code(201).send(
        await fastify.store.put(BookmarkModel, {
          links: request.body
        })
      )
  );

  fastify.get(
    '/bookmark/:id',
    {
      schema: {
        params: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              maxLength: ID_LENGTH,
              minLength: ID_LENGTH
            }
          }
        }
      }
    },
    async ({ params: { id } }, reply) => {
      return reply
        .code(200)
        .send(await fastify.store.getById(BookmarkModel, id));
    }
  );
}
