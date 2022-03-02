import pino from 'pino';
import { config } from '../config';

export const logger = pino({ enabled: config.app.isLoggerEnabled }).child({
  region: config.app.region,
  env: config.env,
});
