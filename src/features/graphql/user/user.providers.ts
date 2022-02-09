import { constants } from '@config';
import { User } from '@features/graphql/user/entities';
import { Connection } from 'typeorm';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [constants.databases.postgres.providerName],
  },
];
