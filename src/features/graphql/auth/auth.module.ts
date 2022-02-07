import { DatabaseModule } from '@features/database/database.module';
import { GraphQLAuthResolver } from '@features/graphql/auth/auth.resolver';
import { GraphQLAuthService } from '@features/graphql/auth/auth.service';
import { GraphQLJwtStrategy } from '@features/graphql/auth/strategies';
import { usersProviders } from '@features/graphql/users/users.providers';
import { UsersService } from '@features/graphql/users/users.service';
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
    GraphQLAuthResolver,
    UsersService,
    GraphQLAuthService,
    GraphQLJwtStrategy,
  ],
  exports: [],
})
export class GraphQLAuthModule {}
