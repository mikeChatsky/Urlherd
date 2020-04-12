import { FastifyInstance } from 'fastify';
import { DataMapper } from '@aws/dynamodb-data-mapper';
import { Provider } from 'src/plugins/store.plugin';
import { Client } from '@elastic/elasticsearch';

export interface PluggedFastifyInstance extends FastifyInstance {
  mapper: DataMapper;
  elastic: Client;
  store: Provider;
}
