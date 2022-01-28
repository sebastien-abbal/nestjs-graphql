import { constants } from '@config';
import { User } from '@features/graphql/users/entities';
import { Connection } from 'typeorm';

export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [constants.databases.postgres.providerName],
  },
];
