import { DatabaseModule } from '@features/database/database.module';
import { usersProviders } from '@features/graphql/users/users.providers';
import { UsersResolver } from '@features/graphql/users/users.resolver';
import { UsersService } from '@features/graphql/users/users.service';
import { Module } from '@nestjs/common';
import { UserPayloadResolver, UsersPayloadResolver } from './types';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...usersProviders,
    UsersResolver,
    UsersService,
    UserPayloadResolver,
    UsersPayloadResolver,
  ],
})
export class UsersModule {}
