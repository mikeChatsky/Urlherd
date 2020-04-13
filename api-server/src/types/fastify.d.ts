import { FastifyInstance } from 'fastify';
import { DataMapper } from '@aws/dynamodb-data-mapper';
import { Client } from '@elastic/elasticsearch';

import { Provider } from './plugins';
import { analyticsService } from './plugins';

export interface PluggedFastifyInstance extends FastifyInstance {
  mapper: DataMapper;
  elastic: Client;
  analytics: analyticsService;
  store: Provider;
}
