import { config as dotenvConfig } from 'dotenv';
import fastify from 'fastify';

import app from './app';

dotenvConfig();

const port = Number(process.env.PORT) || 80;
const server = fastify({ logger: true });

server.register(app);

server.listen(port, err => {
  if (err) {
    throw err;
  }

  // eslint-disable-next-line no-console
  console.log(`server is listening on port ${port}`);
});
