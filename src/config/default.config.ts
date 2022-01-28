import * as envVar from 'env-var';

export const env = envVar.get('NODE_ENV').default('dev').asString();

export const defaultConfig = () => ({
  host: envVar.get('APP_HOST').default('localhost').asString(),
  port: envVar.get('APP_PORT').default(3000).asInt(),
  env: envVar.get('NODE_ENV').default('dev').asString(),
  isLoggerEnabled: ['prod', 'preprod'].includes(env),
});
