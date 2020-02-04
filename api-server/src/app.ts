import path from 'path';
import AutoLoad from 'fastify-autoload';
import db from 'fastify-dynamodb';
import nconf from 'nconf';

export default function(fastify, opts: {} , next: () => void) {
  // TODO: add config file option
  nconf.env();

  fastify.register(db, {
    endpoint: nconf.get('ENDPOINT'),
    accessKeyId: nconf.get('ACCESS_KEY_ID'),
    secretAccessKey: nconf.get('SECRET_ACCESS_KEY')
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'services'),
    options: Object.assign({}, opts)
  });

  next();
}
