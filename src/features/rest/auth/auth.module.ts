import { DatabaseModule } from '@features/database/database.module';
import { usersProviders } from '@features/graphql/users/users.providers';
import { UsersService } from '@features/graphql/users/users.service';
import { RestAuthService } from '@features/rest/auth/auth.service';
import { RestJwtStrategy } from '@features/rest/auth/strategies';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

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
    UsersService,
    RestAuthService,
    RestJwtStrategy,
  ],
  exports: [],
})
export class RestAuthModule {}
