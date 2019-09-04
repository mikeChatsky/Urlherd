import express from 'express';
import helmet from 'helmet';
import { urlencoded, json } from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import methodOverride from 'method-override';
import inProduction from 'in-production';

import applyRoutes from './routes';

export default () => {
  const app = express();

  app.use(helmet());
  app.use(urlencoded({ extended: false }));
  app.use(json());
  app.use(methodOverride());
  app.use(compression());

  if (!inProduction) {
    app.use(morgan('dev'));
  }

  applyRoutes(app);

  return app;
};
