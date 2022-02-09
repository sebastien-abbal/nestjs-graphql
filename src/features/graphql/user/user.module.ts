import { DatabaseModule } from '@features/database/database.module';
import { userProviders } from '@features/graphql/user/user.providers';
import { UserResolver } from '@features/graphql/user/user.resolver';
import { UserService } from '@features/graphql/user/user.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders, UserResolver, UserService],
})
export class UserModule {}
