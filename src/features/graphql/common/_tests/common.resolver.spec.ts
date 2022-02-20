import { config } from '@config';
import { GraphQLAuthService } from '@features/graphql/auth/services';
import { CommonResolver } from '@features/graphql/common/common.resolver';
import { CommonService } from '@features/graphql/common/services';
import { UserService } from '@features/graphql/user/services';
import { mockedUserService } from '@features/graphql/user/_mocks/user.service.mock';
import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';

describe('Common resolver', () => {
  let app: TestingModule;

  let commonResolver: CommonResolver;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          publicKey: config.auth.jwtPublicKey,
          privateKey: config.auth.jwtPrivateKey,
        }),
      ],
      providers: [CommonResolver, CommonService, GraphQLAuthService],
    })
      .useMocker((token) => {
        if (token === UserService) return mockedUserService;
      })
      .compile();

    commonResolver = app.get<CommonResolver>(CommonResolver);
  });

  describe('Resolver definition', () => {
    it('should be defined', () => {
      expect(commonResolver).toBeDefined();
    });
  });

  describe('Queries', () => {
    describe('Query getTest', () => {
      it('should be defined', async () => {
        expect(commonResolver.test).toBeDefined();
      });

      it('should return ok', async () => {
        expect(commonResolver.test()).toEqual(
          expect.objectContaining({
            status: 'ok',
          }),
        );
      });
    });
  });

  afterAll(async () => {
    await app?.close();
  });
});
