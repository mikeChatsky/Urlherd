import DynamoDB from 'aws-sdk/clients/dynamodb';
import { DataMapper } from '@aws/dynamodb-data-mapper';
import config from './config';

export default (): DataMapper =>
  new DataMapper({
    client: new DynamoDB({
      region: config.get('REGION'),
      endpoint: config.get('ENDPOINT'),
      accessKeyId: config.get('ACCESS_KEY_ID'),
      secretAccessKey: config.get('SECRET_ACCESS_KEY')
    })
  });
