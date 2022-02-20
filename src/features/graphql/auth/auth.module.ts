import { config } from '@config';
import { DatabaseModule } from '@features/database/database.module';
import { GraphQLAuthResolver } from '@features/graphql/auth/auth.resolver';
import { GraphQLAuthService } from '@features/graphql/auth/services';
import { GraphQLJwtStrategy } from '@features/graphql/auth/strategies';
import { UserService } from '@features/graphql/user/services';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      publicKey: config.auth.jwtPublicKey,
      privateKey: config.auth.jwtPrivateKey,
    }),
  ],
  providers: [
    GraphQLAuthResolver,
    UserService,
    GraphQLAuthService,
    GraphQLJwtStrategy,
  ],
})
export class GraphQLAuthModule {}
