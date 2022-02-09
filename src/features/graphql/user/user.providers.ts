import { constants } from '@config';
import { User } from '@features/graphql/user/entities';
import { Connection } from 'typeorm';
import { UserAvatar } from './entities/user-avatar.entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [constants.databases.postgres.providerName],
  },
  {
    provide: 'USER_AVATAR_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(UserAvatar),
    inject: [constants.databases.postgres.providerName],
  },
];
