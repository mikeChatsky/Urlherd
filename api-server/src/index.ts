import fastify from 'fastify';

import app from './app';

let config: fastify.ServerOptions = { logger: true };

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();

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

const port: number = Number(process.env.PORT) || 80;
const host: string = process.env.HOST || 'localhost';

const server = fastify(config);

server.register(app);

const start = async () => {
  try {
    await server.listen(port, host);
    server.log.info('env : ' + process.env.NODE_ENV);
  } catch (err) {
    console.log(err);
    server.log.error(err);
  }
};

start();
