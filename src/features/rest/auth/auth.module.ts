import { config } from '@config';
import { DatabaseModule } from '@features/database/database.module';
import { UserService } from '@features/graphql/user/services';
import { RestJwtStrategy } from '@features/rest/auth/strategies';
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
  providers: [UserService, RestJwtStrategy],
})
export class RestAuthModule {}
