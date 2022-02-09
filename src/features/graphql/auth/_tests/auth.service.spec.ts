import { ConfigModule } from '@features/config/config.module';
import { GraphQLAuthService } from '@features/graphql/auth/auth.service';
import { UserService } from '@features/graphql/user/user.service';
import { mockedUserService } from '@features/graphql/user/_mocks/user.service.mock';
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
        if (token === UserService) return mockedUserService;
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
