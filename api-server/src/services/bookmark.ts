import BookmarkModel from '../models/bookmark/bookmark.model';
import { FastifyInstance } from 'src/types/fastify';

export default async function(fastify: FastifyInstance, opts) {
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
    async (request, reply) => {
      const newBookmark = Object.assign(new BookmarkModel(), request.body);
      const { id } = await fastify.mapper.put(newBookmark);

      return reply.code(201).send(id);
    }
  );

  fastify.get('/bookmark', (req, res) => {
    res.code(200).send('kaki');
  });

  fastify.get(
    '/bookmark/:id',
    {
      schema: {
        params: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              format: 'uuid'
            }
          }
        }
      }
    },
    async (request, reply) => {
      const bookmark = await fastify.mapper.get(
        Object.assign(new BookmarkModel(), { id: request.params.id })
      );

      return reply.code(200).send(bookmark);
    }
  );
}