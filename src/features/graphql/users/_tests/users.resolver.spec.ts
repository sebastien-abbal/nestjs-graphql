import { constants } from '@config';
import faker from '@faker-js/faker';
import { ConfigModule } from '@features/config/config.module';
import { UsersResolver } from '@features/graphql/users/users.resolver';
import { UsersService } from '@features/graphql/users/users.service';
import {
  mockedUsersService,
  MOCKED_USER,
} from '@features/graphql/users/_mocks/users.service.mock';
import { Test, TestingModule } from '@nestjs/testing';
import { random } from '@utils';
import { UserRole } from '../types';

describe('Users resolver', () => {
  let app: TestingModule;

  let usersResolver: UsersResolver;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [ConfigModule],
      controllers: [UsersResolver],
      providers: [],
    })
      .useMocker((token) => {
        if (token === UsersService) return mockedUsersService;
      })
      .compile();

    usersResolver = app.get<UsersResolver>(UsersResolver);
  });

  describe('Resolver definition', () => {
    it('should be defined', () => {
      expect(usersResolver).toBeDefined();
    });
  });

  describe('Queries', () => {
    describe('Query getUser', () => {
      it('should be defined', async () => {
        expect(usersResolver.getUser).toBeDefined();
      });

      it('should return an user', async () => {
        expect(await usersResolver.getUser({ userID: MOCKED_USER.id })).toEqual(
          expect.objectContaining({
            user: expect.objectContaining({ id: MOCKED_USER.id }),
          }),
        );
      });
    });

    describe('Query getUsers', () => {
      it('should be defined', async () => {
        expect(usersResolver.getUsers).toBeDefined();
      });

      it(`should return an array of ${constants.graphql.query.defaultTakeResults} users`, async () => {
        const usersPayload = await usersResolver.getUsers({
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
        expect(usersResolver.createUser).toBeDefined();
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
          await usersResolver.createUser({
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
          await usersResolver.createUser({
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
        expect(usersResolver.updateUser).toBeDefined();
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
          await usersResolver.updateUser(
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
          await usersResolver.updateUser(
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
          await usersResolver.updateUser(
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
        expect(usersResolver.deleteUser).toBeDefined();
      });

      it('should return a deleted user', async () => {
        expect(
          await usersResolver.deleteUser(
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
          await usersResolver.deleteUser(
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
          await usersResolver.deleteUser(
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
