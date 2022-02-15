import { config } from '@config';
import { PrismaService } from '@features/database/services';
import { mockedPrismaService } from '@features/database/_mocks/database.service.mock';
import { GraphQLAuthService } from '@features/graphql/auth/services';
import { UserService } from '@features/graphql/user/services';
import { mockedUserService } from '@features/graphql/user/_mocks/user.service.mock';
import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';

describe('GraphQL Auth service', () => {
  let authService: GraphQLAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [JwtModule.register({ secret: config.auth.jwtSecret })],
      providers: [GraphQLAuthService],
    })
      .useMocker((token) => {
        if (token === UserService) return mockedUserService;
        if (token === PrismaService) return mockedPrismaService;
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
