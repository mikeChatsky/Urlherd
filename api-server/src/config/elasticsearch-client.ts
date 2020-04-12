import { Client } from '@elastic/elasticsearch';

import config from './config';

export default new Client({
  node: config.get('ELASTIC_NODE')
});
