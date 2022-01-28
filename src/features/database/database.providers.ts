import { defaultConfig } from '@config';
import * as envVar from 'env-var';
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    name: 'postgres-db',
    provide: 'postgres-connection',
    useFactory: async () =>
      await createConnection({
        name: 'postgres-db',
        type: 'postgres',
        host: envVar.get('PG_HOST').required().asString(),
        port: envVar.get('PG_PORT').required().asInt(),
        username: envVar.get('PG_USER').required().asString(),
        password: envVar.get('PG_PASSWORD').required().asString(),
        database: envVar.get('PG_DATABASE').required().asString(),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: defaultConfig().env !== 'prod',
      }),
  },
];
