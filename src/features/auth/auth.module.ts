import { AuthResolver } from '@features/auth/auth.resolver';
import { AuthService } from '@features/auth/auth.service';
import { JwtStrategy } from '@features/auth/strategies';
import { DatabaseModule } from '@features/database/database.module';
import { usersProviders } from '@features/graphql/users/users.providers';
import { UsersService } from '@features/graphql/users/users.service';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { SignInPayloadResolver } from './types';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('jwtSecret'),
      }),
      imports: [],
      inject: [ConfigService],
    }),
  ],
  providers: [
    ...usersProviders,
    AuthResolver,
    UsersService,
    AuthService,
    JwtStrategy,
    SignInPayloadResolver,
  ],
  exports: [],
})
export class AuthModule {}
