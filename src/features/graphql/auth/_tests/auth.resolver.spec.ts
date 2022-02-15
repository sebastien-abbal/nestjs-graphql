import { config } from '@config';
import { GraphQLAuthResolver } from '@features/graphql/auth/auth.resolver';
import { GraphQLAuthService } from '@features/graphql/auth/services';
import { UserService } from '@features/graphql/user/services';
import {
  mockedUserService,
  MOCKED_USERS,
  MOCKED_USER_PASSWORD,
} from '@features/graphql/user/_mocks/user.service.mock';
import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';

describe('GraphQL Auth resolver', () => {
  let app: TestingModule;
  let authResolver: GraphQLAuthResolver;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [JwtModule.register({ secret: config.auth.jwtSecret })],
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
            email: MOCKED_USERS[0].email,
            password: MOCKED_USER_PASSWORD,
          }),
        ).toEqual(
          expect.objectContaining({
            user: expect.objectContaining({ id: MOCKED_USERS[0].id }),
            accessToken: expect.any(String),
            refreshToken: expect.any(String),
          }),
        );
      });

      it('should return an error with code [WrongCredentialsError]', async () => {
        expect(
          await authResolver.authUser({
            email: MOCKED_USERS[0].email,
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
