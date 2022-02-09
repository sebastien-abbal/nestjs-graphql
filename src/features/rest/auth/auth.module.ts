import { DatabaseModule } from '@features/database/database.module';
import { userProviders } from '@features/graphql/user/user.providers';
import { UserService } from '@features/graphql/user/user.service';
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
      inject: [ConfigService],
    }),
  ],
  providers: [...userProviders, UserService, RestJwtStrategy],
})
export class RestAuthModule {}
