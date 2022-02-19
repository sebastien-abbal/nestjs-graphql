import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { config } from '../../../../config';
import { GraphQLAuthService } from '../../auth/services';
import { UserService } from '../../user/services';
import { mockedUserService } from '../../user/_mocks/user.service.mock';
import { CommonResolver } from '../common.resolver';
import { CommonService } from '../services';

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
