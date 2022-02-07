import { DatabaseModule } from '@features/database/database.module';
import { usersProviders } from '@features/graphql/users/users.providers';
import { UsersService } from '@features/graphql/users/users.service';
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
  providers: [...usersProviders, UsersService, RestJwtStrategy],
  exports: [],
})
export class RestAuthModule {}
