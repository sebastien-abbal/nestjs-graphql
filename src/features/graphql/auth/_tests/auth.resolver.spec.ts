import { config } from '@config';
import { USERS } from '@features/database/data/seed';
import { GraphQLAuthResolver } from '@features/graphql/auth/auth.resolver';
import { GraphQLAuthService } from '@features/graphql/auth/services';
import { UserService } from '@features/graphql/user/services';
import { mockedUserService } from '@features/graphql/user/_mocks/user.service.mock';
import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { hashSync } from 'bcrypt';

describe('GraphQL Auth resolver', () => {
  let app: TestingModule;
  let authResolver: GraphQLAuthResolver;
  let authService: GraphQLAuthService;
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
    authService = app.get<GraphQLAuthService>(GraphQLAuthService);
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

    describe('Mutation authRefresh', () => {
      it('should be defined', async () => {
        expect(authResolver.authRefresh).toBeDefined();
      });

      it('should returns an user auth payload', async () => {
        const authUserPayload = authService.authUser({
          data: {
            email: CURRENT_USER.email,
            password: CURRENT_USER.password,
          },
          targetedUser: {
            ...CURRENT_USER,
            password: hashSync(CURRENT_USER.password, 10),
          },
        });

        expect(
          await authResolver.authRefresh({
            refreshToken: authUserPayload.refreshToken,
          }),
        ).toEqual(
          expect.objectContaining({
            // user: CURRENT_USER,
            accessToken: expect.any(String),
            refreshToken: expect.any(String),
          }),
        );
      });

      it('should returns an anonymous auth payload', async () => {
        const authAnonymousPayload = authService.authAnonymous();

        expect(
          await authResolver.authRefresh({
            refreshToken: authAnonymousPayload.refreshToken,
          }),
        ).toEqual(
          expect.objectContaining({
            user: null,
            accessToken: expect.any(String),
            refreshToken: expect.any(String),
          }),
        );
      });

      it('should return an error with code [UserBannedError]', async () => {
        const authUserPayload = authService.authUser({
          data: {
            email: BANNED_USER.email,
            password: BANNED_USER.password,
          },
          targetedUser: {
            ...BANNED_USER,
            password: hashSync(BANNED_USER.password, 10),
          },
        });

        expect(
          await authResolver.authRefresh({
            refreshToken: authUserPayload.refreshToken,
          }),
        ).toEqual(
          expect.objectContaining({
            code: 'UserBannedError',
            message: expect.any(String),
          }),
        );
      });

      it('should return an error with code [UserDeletedError]', async () => {
        const authUserPayload = authService.authUser({
          data: {
            email: DELETED_USER.email,
            password: DELETED_USER.password,
          },
          targetedUser: {
            ...DELETED_USER,
            password: hashSync(DELETED_USER.password, 10),
          },
        });

        expect(
          await authResolver.authRefresh({
            refreshToken: authUserPayload.refreshToken,
          }),
        ).toEqual(
          expect.objectContaining({
            code: 'UserDeletedError',
            message: expect.any(String),
          }),
        );
      });

      it('should return an error with code [WrongAuthTokenFormatError]', async () => {
        const FAKE_REFRESH_TOKEN = 'eyJhbGciIUzI1.WRONG_TOKEN.NiIsInI6IkpXVCJ9';

        expect(
          await authResolver.authRefresh({
            refreshToken: FAKE_REFRESH_TOKEN,
          }),
        ).toEqual(
          expect.objectContaining({
            code: 'WrongAuthTokenFormatError',
            message: expect.any(String),
          }),
        );
      });
    });
  });

  afterAll(async () => {
    await app?.close();
  });
});
