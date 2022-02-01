import { constants } from '@config';
import * as envVar from 'env-var';
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
        : await createConnection({
            name: constants.databases.postgres.name,
            type: 'postgres',
            host: envVar.get('PG_HOST').required().asString(),
            port: envVar.get('PG_PORT').required().asInt(),
            username: envVar.get('PG_USER').required().asString(),
            password: envVar.get('PG_PASSWORD').required().asString(),
            database: envVar.get('PG_DATABASE').required().asString(),
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: !['prod', 'preprod'].includes(
              envVar.get('NODE_ENV').required().asString(),
            ),
          });
    },
  },
];
