import BookmarkModel from '../models/bookmark/bookmark.model';
import { FastifyInstance } from 'src/types/fastify';
import { ID_LENGTH } from '../models/Id';
import { ItemNotFoundException } from '@aws/dynamodb-data-mapper';

export default async function (fastify: FastifyInstance) {
  fastify.post(
    '/bookmark',
    {
      schema: {
        body: {
          type: 'array',
          items: { type: 'string', pattern: '\\w+:(\\/?\\/?)[^s]+' },
        },
      },
    },
    async (request, reply) => {
      const newBookmark = Object.assign(new BookmarkModel(), request.body);
      const { id } = await fastify.mapper.put(newBookmark);

      return reply.code(201).send(id);
    }
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
              minLength: ID_LENGTH,
            },
          },
        },
      },
    },
    async (request, reply) => {
      try {
        const bookmark = await fastify.mapper.get(
          Object.assign(new BookmarkModel(), { id: request.params.id })
        );

        return reply.code(200).send(bookmark);
      } catch (err) {
        if (err.name === "ItemNotFoundException") {
          return reply.code(404).send('Bookmark not found');
        }

        throw err;
      }
    }
  );
}
