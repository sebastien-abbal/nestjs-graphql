import { usersProviders } from '@features/graphql/users/users.providers';
import { UsersResolver } from '@features/graphql/users/users.resolver';
import { UserRoleScalar } from '@features/graphql/users/users.scalars';
import { UsersService } from '@features/graphql/users/users.service';
import { DatabaseModule } from '@features/_database/database.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  providers: [...usersProviders, UsersResolver, UsersService, UserRoleScalar],
})
export class UsersModule {}
