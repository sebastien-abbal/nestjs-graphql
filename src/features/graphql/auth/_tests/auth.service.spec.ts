import { ConfigModule } from '@features/config/config.module';
import { GraphQLAuthService } from '@features/graphql/auth/auth.service';
import { UsersService } from '@features/graphql/users/users.service';
import { mockedUsersService } from '@features/graphql/users/_mocks/users.service.mock';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';

describe('GraphQL Auth service', () => {
  let authService: GraphQLAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule,
        JwtModule.registerAsync({
          useFactory: (configService: ConfigService) => ({
            secret: configService.get<string>('jwtSecret'),
          }),
          inject: [ConfigService],
        }),
      ],
      providers: [GraphQLAuthService],
    })
      .useMocker((token) => {
        if (token === UsersService) return mockedUsersService;
      })
      .compile();

    authService = module.get<GraphQLAuthService>(GraphQLAuthService);
  });

  describe('Service definition', () => {
    it('should be defined', () => {
      expect(authService).toBeDefined();
    });
  });
});
