import path from 'path';
import AutoLoad from 'fastify-autoload';

export default function(fastify, opts: {}, next: () => void) {
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    ignorePattern: /index\.\w+/,
    includeTypeScript: true,
    options: Object.assign({}, opts)
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'services'),
    includeTypeScript: true,
    options: Object.assign({ prefix: '/api' }, opts)
  });
  
  next();
}
