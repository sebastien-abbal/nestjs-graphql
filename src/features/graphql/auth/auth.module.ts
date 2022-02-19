import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { config } from '../../../config';
import { DatabaseModule } from '../../database/database.module';
import { UserService } from '../user/services';
import { GraphQLAuthResolver } from './auth.resolver';
import { GraphQLAuthService } from './services';
import { GraphQLJwtStrategy } from './strategies';

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
