import { Pool, spawn, Worker, ModuleThread } from 'threads';
import { FastifyRequest, Logger } from 'fastify';

import { filterRequest } from './utils';
import { AnalyticsWorker } from '../types/analytics';

export default class Analytics {
  pool: Pool<ModuleThread<AnalyticsWorker>>;
  logger: Logger;

  constructor(log: Logger) {
    this.logger = log;
    this.pool = Pool(() => spawn<AnalyticsWorker>(new Worker('./worker')));
  }

  async recordRequest(resourceId: string, request: FastifyRequest) {
    return this.pool.queue(async ({ recordRequest }) => {
      try {
        await recordRequest(resourceId, filterRequest(request));
      } catch (error) {
        this.logger.error(error);
      }
    });
  }
}