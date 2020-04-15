import { FastifyRequest } from 'fastify';
import { IncomingMessage } from 'http';
import { Socket } from 'net';

type PlainRequest<T> = {
  [key in keyof T]: string | number | boolean;
};

type FilteredFastifyRequest = Partial<
  Pick<FastifyRequest, 'ip' | 'params' | 'hostname'>
>;
type FilteredNativeRequest = Partial<Pick<IncomingMessage, 'url' | 'method'>>;
type FilteredSocket = Partial<Pick<Socket, 'remoteAddress' | 'remotePort'>>;

declare type FilteredRequest =
  | FilteredFastifyRequest
  | FilteredNativeRequest
  | FilteredSocket;

declare type AnalyticsWorker = {
  recordRequest<T>(resourceId: string, request: PlainRequest<T>): void;
};

declare type AnalyticsService = {
  recordRequest: (resourceId: string, request: FastifyRequest) => void;
};
