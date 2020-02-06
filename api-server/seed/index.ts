import { config as dotenvConfig } from 'dotenv';
import pino from 'pino';

import mapper from '../src/config/dynamodb-mapper';
import { seed as seedBookmarks } from '../src/models/bookmark/bookmark.seed';

dotenvConfig();

const logger = pino({
  prettyPrint: true
});

const seeder = async () => {
  try {
    const dynamo = mapper();
    await seedBookmarks(dynamo);
  } catch (err) {
    console.log('err')
    logger.error(err);
  }
};

seeder();
