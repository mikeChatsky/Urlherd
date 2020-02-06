import path from 'path';
import AutoLoad from 'fastify-autoload';

export default function(fastify, opts: {}, next: () => void) {
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
