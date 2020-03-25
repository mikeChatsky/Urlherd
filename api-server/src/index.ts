import { config as dotenvConfig } from 'dotenv';
import fastify from 'fastify';
import { inProduction } from 'in-production';

import app from './app';

dotenvConfig();

const port: number = Number(process.env.PORT) || 80;

let config: fastify.ServerOptions = { logger: true };

if (!inProduction) {
  config = {
    ...config,
    logger: {
      level: 'info',
      prettyPrint: {
        levelFirst: true
      },
      prettifier: require('pino-pretty')
    }
  };
}

const server = fastify(config);

server.register(app);

const start = async () => {
  try {
    await server.listen(port);
    server.log.info('env : ' + process.env.NODE_ENV);
  } catch (err) {
    console.log(err);
    server.log.error(err);
  }
};

start();
