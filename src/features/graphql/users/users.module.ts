import { usersProviders } from '@features/graphql/users/users.providers';
import { UsersResolver } from '@features/graphql/users/users.resolver';
import { UsersService } from '@features/graphql/users/users.service';
import { DatabaseModule } from '@features/_database/database.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  providers: [...usersProviders, UsersResolver, UsersService],
})
export class UsersModule {}
