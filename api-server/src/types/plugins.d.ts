import { Model } from '../models/Model';
import { FastifyRequest } from 'fastify';

declare interface Provider {
  getById<T>(model: Model<T>, id: string): Promise<T>;
  put<T>(model: Model<T>, content: any): Promise<string>;
}
