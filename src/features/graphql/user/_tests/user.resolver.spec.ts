import { constants } from '@config';
import faker from '@faker-js/faker';
import { ConfigModule } from '@features/config/config.module';
import { UserService } from '@features/graphql/user/services';
import { UserRole } from '@features/graphql/user/types';
import { UserResolver } from '@features/graphql/user/user.resolver';
import {
  mockedUserService,
  MOCKED_USER,
} from '@features/graphql/user/_mocks/user.service.mock';
import { Test, TestingModule } from '@nestjs/testing';
import { random } from '@utils';

describe('User resolver', () => {
  let app: TestingModule;

  let userResolver: UserResolver;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [UserResolver],
    })
      .useMocker((token) => {
        if (token === UserService) return mockedUserService;
      })
      .compile();

    userResolver = app.get<UserResolver>(UserResolver);
  });

  describe('Resolver definition', () => {
    it('should be defined', () => {
      expect(userResolver).toBeDefined();
    });
  });

  describe('Queries', () => {
    describe('Query getUser', () => {
      it('should be defined', async () => {
        expect(userResolver.getUser).toBeDefined();
      });

      it('should return an user', async () => {
        expect(await userResolver.getUser({ userID: MOCKED_USER.id })).toEqual(
          expect.objectContaining({
            user: expect.objectContaining({ id: MOCKED_USER.id }),
          }),
        );
      });
    });

    describe('Query getUsers', () => {
      it('should be defined', async () => {
        expect(userResolver.getUser).toBeDefined();
      });

      it(`should return an array of ${constants.graphql.query.defaultTakeResults} users`, async () => {
        const usersPayload = await userResolver.getUsers({
          take: constants.graphql.query.defaultTakeResults,
        });

        expect(usersPayload).toEqual(
          expect.objectContaining({
            users: expect.arrayContaining([
              expect.objectContaining({ id: MOCKED_USER.id }),
            ]),
          }),
        );
        expect(usersPayload.users.length).toBeLessThanOrEqual(
          constants.graphql.query.defaultTakeResults,
        );
      });
    });
  });

  describe('Mutations', () => {
    describe('Mutation createUser', () => {
      it('should be defined', async () => {
        expect(userResolver.createUser).toBeDefined();
      });

      it('should return a new user', async () => {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = `${firstName.toLowerCase()}@${lastName.toLowerCase()}.com`;
        const password = `${faker.animal.type()}${random(
          1900,
          new Date().getFullYear(),
        )}`;

        expect(
          await userResolver.createUser({
            email,
            firstName,
            lastName,
            password,
          }),
        ).toEqual(
          expect.objectContaining({
            user: expect.objectContaining({
              email,
              firstName,
              lastName,
            }),
          }),
        );
      });

      it('should return an error with code [UserAlreadyExistsError]', async () => {
        const { email, firstName, lastName } = MOCKED_USER;
        const password = `${faker.animal.type()}${random(
          1900,
          new Date().getFullYear(),
        )}`;

        expect(
          await userResolver.createUser({
            email,
            firstName,
            lastName,
            password,
          }),
        ).toEqual(
          expect.objectContaining({
            code: 'UserAlreadyExistsError',
            message: expect.any(String),
          }),
        );
      });
    });

    describe('Mutation updateUser', () => {
      it('should be defined', async () => {
        expect(userResolver.updateUser).toBeDefined();
      });

      it('should return an updated user', async () => {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = `${firstName.toLowerCase()}@${lastName.toLowerCase()}.com`;
        const password = `${faker.animal.type()}${random(
          1900,
          new Date().getFullYear(),
        )}`;

        expect(
          await userResolver.updateUser(
            { userID: MOCKED_USER.id },
            {
              email,
              firstName,
              lastName,
              password,
            },
            MOCKED_USER,
          ),
        ).toEqual(
          expect.objectContaining({
            user: expect.objectContaining({
              email,
              firstName,
              lastName,
            }),
          }),
        );
      });

      it('should return an error with code [UserNotFoundError]', async () => {
        const password = `${faker.animal.type()}${random(
          1900,
          new Date().getFullYear(),
        )}`;

        expect(
          await userResolver.updateUser(
            { userID: faker.datatype.uuid() },
            { password },
            {
              ...MOCKED_USER,
              roles: [UserRole.ADMIN],
            },
          ),
        ).toEqual(
          expect.objectContaining({
            code: 'UserNotFoundError',
            message: expect.any(String),
          }),
        );
      });

      it('should return an error with code [NotAuthorizedError]', async () => {
        const password = `${faker.animal.type()}${random(
          1900,
          new Date().getFullYear(),
        )}`;

        expect(
          await userResolver.updateUser(
            { userID: faker.datatype.uuid() },
            { password },
            MOCKED_USER,
          ),
        ).toEqual(
          expect.objectContaining({
            code: 'NotAuthorizedError',
            message: expect.any(String),
          }),
        );
      });
    });

    describe('Mutation deleteUser', () => {
      it('should be defined', async () => {
        expect(userResolver.deleteUser).toBeDefined();
      });

      it('should return a deleted user', async () => {
        expect(
          await userResolver.deleteUser(
            {
              userID: MOCKED_USER.id,
            },
            MOCKED_USER,
          ),
        ).toEqual(
          expect.objectContaining({
            isDeleted: true,
          }),
        );
      });

      it('should return an error with code [UserNotFoundError]', async () => {
        expect(
          await userResolver.deleteUser(
            { userID: faker.datatype.uuid() },
            {
              ...MOCKED_USER,
              roles: [UserRole.ADMIN],
            },
          ),
        ).toEqual(
          expect.objectContaining({
            code: 'UserNotFoundError',
            message: expect.any(String),
          }),
        );
      });

      it('should return an error with code [NotAuthorizedError]', async () => {
        expect(
          await userResolver.deleteUser(
            { userID: faker.datatype.uuid() },
            MOCKED_USER,
          ),
        ).toEqual(
          expect.objectContaining({
            code: 'NotAuthorizedError',
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
