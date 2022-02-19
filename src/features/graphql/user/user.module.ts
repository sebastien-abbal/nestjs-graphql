import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { UserAvatarService, UserService } from './services';
import { UserModelResolver } from './types';
import { UserResolver } from './user.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [UserResolver, UserModelResolver, UserService, UserAvatarService],
})
export class UserModule {}
