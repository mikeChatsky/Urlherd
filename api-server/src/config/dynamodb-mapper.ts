import nconf from 'nconf';
import DynamoDB from 'aws-sdk/clients/dynamodb';
import { DataMapper } from '@aws/dynamodb-data-mapper';

export default (): DataMapper => {
  // TODO: add config file option
  nconf.env();

  const client = new DynamoDB({
    region: nconf.get('REGION'),
    endpoint: nconf.get('ENDPOINT'),
    accessKeyId: nconf.get('ACCESS_KEY_ID'),
    secretAccessKey: nconf.get('SECRET_ACCESS_KEY')
  });

  return new DataMapper({ client });
};
