import fastify from 'fastify';
import { DataMapper } from '@aws/dynamodb-data-mapper';

export interface FastifyInstance extends fastify.FastifyInstance {
  mapper: DataMapper;
}
