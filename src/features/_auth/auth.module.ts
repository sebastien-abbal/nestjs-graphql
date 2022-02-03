import { usersProviders } from '@features/graphql/users/users.providers';
import { UsersService } from '@features/graphql/users/users.service';
import { AuthResolver } from '@features/_auth/auth.resolver';
import { AuthService } from '@features/_auth/auth.service';
import { JwtStrategy } from '@features/_auth/strategies';
import { DatabaseModule } from '@features/_database/database.module';
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
    AuthService,
    JwtStrategy,
    AuthResolver,
  ],
  exports: [],
})
export class AuthModule {}
