import { config, constants } from '@config';
import { createConnection, getConnection, getConnectionManager } from 'typeorm';

export const databaseProviders = [
  {
    name: constants.databases.postgres.name,
    provide: constants.databases.postgres.providerName,
    useFactory: async () => {
      const connectionManager = getConnectionManager();

      const connection = !connectionManager.has(
        constants.databases.postgres.providerName,
      )
        ? await createConnection(config.pgDatabase)
        : getConnection(constants.databases.postgres.providerName);

      return connection;
    },
  },
];
