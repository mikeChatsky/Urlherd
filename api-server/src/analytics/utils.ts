import { FastifyRequest } from 'fastify';
import { pick } from 'lodash';
import { FilteredRequest } from '../types/analytics';

const monitoredProps = [
  'ip',
  'params',
  'hostname',
  'req.url',
  'req.method',
  'req.connection.remoteAddress',
  'req.connection.remotePort'
];

export const filterRequest = (request: FastifyRequest): FilteredRequest =>
  pick(request, monitoredProps);
