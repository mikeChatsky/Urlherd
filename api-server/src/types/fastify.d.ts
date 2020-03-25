import { FastifyInstance } from 'fastify';
import { DataMapper } from '@aws/dynamodb-data-mapper';
import { Provider } from 'src/plugins/store.plugin';

export interface PluggedFastifyInstance extends FastifyInstance {
  mapper: DataMapper;
  store: Provider;
}
