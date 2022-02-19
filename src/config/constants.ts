import { EnvType } from '../@types';

export const PROD_ENV: EnvType = 'prod';
export const PREPROD_ENV: EnvType = 'preprod';
export const DEV_ENV: EnvType = 'dev';
export const TEST_ENV: EnvType = 'test';

export const constants = {
  app: {
    name: 'GraphQL nest API',
    company: 'Sébastien ABBAL',
    envsAvailable: [PROD_ENV, PREPROD_ENV, DEV_ENV, TEST_ENV],
    localhost: 'localhost',
    port: 3000,
  },
  databases: {
    postgres: {
      name: 'postgres-db',
      providerName: 'POSTGRES_CONNECTION',
    },
  },
  graphql: {
    complexity: {
      max: 50,
      defaultValue: 1,
    },
    query: {
      defaultTakeResults: 20,
      defaultSkip: 0,
      maxResults: 100,
      minResults: 1,
    },
  },
};
