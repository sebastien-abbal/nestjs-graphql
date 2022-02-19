import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { config } from '../../../../config';
import { USERS } from '../../../database/data/seed';
import { UserService } from '../../user/services';
import { mockedUserService } from '../../user/_mocks/user.service.mock';
import { GraphQLAuthResolver } from '../auth.resolver';
import { GraphQLAuthService } from '../services';

describe('GraphQL Auth resolver', () => {
  let app: TestingModule;
  let authResolver: GraphQLAuthResolver;
  const CURRENT_USER = USERS[0];
  const BANNED_USER = USERS[3];
  const DELETED_USER = USERS[4];

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          publicKey: config.auth.jwtPublicKey,
          privateKey: config.auth.jwtPrivateKey,
        }),
      ],
      providers: [GraphQLAuthResolver, GraphQLAuthService],
    })
      .useMocker((token) => {
        if (token === UserService) return mockedUserService;
      })
      .compile();

    authResolver = app.get<GraphQLAuthResolver>(GraphQLAuthResolver);
  });

  describe('Resolver definition', () => {
    it('should be defined', () => {
      expect(authResolver).toBeDefined();
    });
  });

  describe('Mutations', () => {
    describe('Mutation authUser', () => {
      it('should be defined', async () => {
        expect(authResolver.authUser).toBeDefined();
      });

      it('should returns an user auth payload', async () => {
        expect(
          await authResolver.authUser({
            email: CURRENT_USER.email,
            password: CURRENT_USER.password,
          }),
        ).toEqual(
          expect.objectContaining({
            user: expect.objectContaining({ id: CURRENT_USER.id }),
            accessToken: expect.any(String),
            refreshToken: expect.any(String),
          }),
        );
      });

      it('should return an error with code [UserBannedError]', async () => {
        expect(
          await authResolver.authUser({
            email: BANNED_USER.email,
            password: BANNED_USER.password,
          }),
        ).toEqual(
          expect.objectContaining({
            code: 'UserBannedError',
            message: expect.any(String),
          }),
        );
      });

      it('should return an error with code [UserDeletedError]', async () => {
        expect(
          await authResolver.authUser({
            email: DELETED_USER.email,
            password: BANNED_USER.password,
          }),
        ).toEqual(
          expect.objectContaining({
            code: 'UserDeletedError',
            message: expect.any(String),
          }),
        );
      });

      it('should return an error with code [WrongCredentialsError]', async () => {
        expect(
          await authResolver.authUser({
            email: CURRENT_USER.email,
            password: 'xxx-wrong-xxx',
          }),
        ).toEqual(
          expect.objectContaining({
            code: 'WrongCredentialsError',
            message: expect.any(String),
          }),
        );
      });
    });

    describe('Mutation authAnonymous', () => {
      it('should be defined', async () => {
        expect(authResolver.authAnonymous).toBeDefined();
      });

      it('should returns an anonymous auth payload', async () => {
        expect(await authResolver.authAnonymous()).toEqual(
          expect.objectContaining({
            accessToken: expect.any(String),
            refreshToken: expect.any(String),
          }),
        );
      });
    });
  });

  afterAll(async () => {
    await app?.close();
  });
});
