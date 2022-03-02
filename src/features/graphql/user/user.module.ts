import { DatabaseModule } from '@features/database/database.module';
import {
  UserAvatarService,
  UserService,
} from '@features/graphql/user/services';
import {
  UserAvatarPictureModelResolver,
  UserModelResolver,
} from '@features/graphql/user/types';
import { UserResolver } from '@features/graphql/user/user.resolver';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  providers: [
    UserResolver,
    UserModelResolver,
    UserAvatarPictureModelResolver,
    UserService,
    UserAvatarService,
  ],
})
export class UserModule {}
