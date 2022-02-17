import { config } from '@config';
import { USERS, USER_PASSWORD } from '@features/database/data/seed';
import { GraphQLAuthResolver } from '@features/graphql/auth/auth.resolver';
import { GraphQLAuthService } from '@features/graphql/auth/services';
import { UserService } from '@features/graphql/user/services';
import { mockedUserService } from '@features/graphql/user/_mocks/user.service.mock';
import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';

describe('GraphQL Auth resolver', () => {
  let app: TestingModule;
  let authResolver: GraphQLAuthResolver;

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
            email: USERS[0].email,
            password: USER_PASSWORD,
          }),
        ).toEqual(
          expect.objectContaining({
            user: expect.objectContaining({ id: USERS[0].id }),
            accessToken: expect.any(String),
            refreshToken: expect.any(String),
          }),
        );
      });

      it('should return an error with code [WrongCredentialsError]', async () => {
        expect(
          await authResolver.authUser({
            email: USERS[0].email,
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
