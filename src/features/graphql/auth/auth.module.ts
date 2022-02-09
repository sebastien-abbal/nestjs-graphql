import { DatabaseModule } from '@features/database/database.module';
import { GraphQLAuthResolver } from '@features/graphql/auth/auth.resolver';
import { GraphQLAuthService } from '@features/graphql/auth/auth.service';
import { GraphQLJwtStrategy } from '@features/graphql/auth/strategies';
import { userProviders } from '@features/graphql/user/user.providers';
import { UserService } from '@features/graphql/user/user.service';
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
  providers: [
    ...userProviders,
    GraphQLAuthResolver,
    UserService,
    GraphQLAuthService,
    GraphQLJwtStrategy,
  ],
})
export class GraphQLAuthModule {}
