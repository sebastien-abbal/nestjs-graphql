import { DatabaseModule } from '@features/database/database.module';
import { UserEntityResolver } from '@features/graphql/user/entities';
import {
  UserAvatarService,
  UserService,
} from '@features/graphql/user/services';
import { userProviders } from '@features/graphql/user/user.providers';
import { UserResolver } from '@features/graphql/user/user.resolver';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userProviders,
    UserResolver,
    UserEntityResolver,
    UserService,
    UserAvatarService,
  ],
})
export class UserModule {}
