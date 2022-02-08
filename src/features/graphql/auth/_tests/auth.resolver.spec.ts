import { ConfigModule } from '@features/config/config.module';
import { GraphQLAuthResolver } from '@features/graphql/auth/auth.resolver';
import { GraphQLAuthService } from '@features/graphql/auth/auth.service';
import { UsersService } from '@features/graphql/users/users.service';
import {
  mockedUsersService,
  MOCKED_USER,
  MOCKED_USER_PASSWORD,
} from '@features/graphql/users/_mocks/users.service.mock';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';

describe('GraphQL Auth resolver', () => {
  let app: TestingModule;

  let authResolver: GraphQLAuthResolver;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        ConfigModule,
        JwtModule.registerAsync({
          useFactory: (configService: ConfigService) => ({
            secret: configService.get<string>('jwtSecret'),
          }),
          inject: [ConfigService],
        }),
      ],
      providers: [GraphQLAuthResolver, GraphQLAuthService],
    })
      .useMocker((token) => {
        if (token === UsersService) return mockedUsersService;
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
    describe('Mutation signInUser', () => {
      it('should be defined', async () => {
        expect(authResolver.signInUser).toBeDefined();
      });

      it('should returns an user auth payload', async () => {
        expect(
          await authResolver.signInUser({
            email: MOCKED_USER.email,
            password: MOCKED_USER_PASSWORD,
          }),
        ).toEqual(
          expect.objectContaining({
            user: expect.objectContaining({ id: MOCKED_USER.id }),
            accessToken: expect.any(String),
            refreshToken: expect.any(String),
          }),
        );
      });

      it('should return an error with code [WrongCredentialsError]', async () => {
        expect(
          await authResolver.signInUser({
            email: MOCKED_USER.email,
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

    describe('Mutation signInAnonymous', () => {
      it('should be defined', async () => {
        expect(authResolver.signInAnonymous).toBeDefined();
      });

      it('should returns an anonymous auth payload', async () => {
        expect(await authResolver.signInAnonymous()).toEqual(
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
