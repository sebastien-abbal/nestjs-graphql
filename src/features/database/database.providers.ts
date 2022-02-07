import { config, constants } from '@config';
import { createConnection, getConnection } from 'typeorm';

export const databaseProviders = [
  {
    name: constants.databases.postgres.name,
    provide: constants.databases.postgres.providerName,
    useFactory: async () => {
      let connection = null;
      try {
        connection = getConnection(constants.databases.postgres.name);
      } catch (err) {}

      return connection
        ? connection
        : await createConnection(config.pgDatabase);
    },
  },
];
