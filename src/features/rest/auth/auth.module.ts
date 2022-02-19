import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { config } from '../../../config';
import { DatabaseModule } from '../../database/database.module';
import { UserService } from '../../graphql/user/services';
import { RestJwtStrategy } from './strategies';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      publicKey: config.auth.jwtPublicKey,
      privateKey: config.auth.jwtPrivateKey,
    }),
  ],
  providers: [UserService, RestJwtStrategy],
})
export class RestAuthModule {}
