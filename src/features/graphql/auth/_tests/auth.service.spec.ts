import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { config } from '../../../../config';
import { PrismaService } from '../../../database/services';
import { mockedPrismaService } from '../../../database/_mocks/database.service.mock';
import { UserService } from '../../user/services';
import { mockedUserService } from '../../user/_mocks/user.service.mock';
import { GraphQLAuthService } from '../services';

describe('GraphQL Auth service', () => {
  let authService: GraphQLAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          publicKey: config.auth.jwtPublicKey,
          privateKey: config.auth.jwtPrivateKey,
        }),
      ],
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
