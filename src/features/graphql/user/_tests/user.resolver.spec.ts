import { constants } from '@config';
import faker from '@faker-js/faker';
import { USERS } from '@features/database/data/seed/users.data';
import { PrismaService } from '@features/database/services';
import { mockedPrismaService } from '@features/database/_mocks/database.service.mock';
import { UserService } from '@features/graphql/user/services';
import { UserResolver } from '@features/graphql/user/user.resolver';
import { mockedUserService } from '@features/graphql/user/_mocks/user.service.mock';
import { Test, TestingModule } from '@nestjs/testing';
import { UserGender, UserLocale, UserRole } from '@types';
import { random } from '@utils';

describe('User resolver', () => {
  let app: TestingModule;
  let userResolver: UserResolver;
  const CURRENT_USER = USERS[0];
  const ADMIN_USER = USERS[1];
  const OTHER_USER = USERS[2];

  beforeAll(async () => {
    app = await Test.createTestingModule({
      providers: [UserResolver],
    })
      .useMocker((token) => {
        if (token === UserService) return mockedUserService;
        if (token === PrismaService) return mockedPrismaService;
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
        expect(userResolver.user).toBeDefined();
      });

      it('should return an user', async () => {
        expect(await userResolver.user({ id: CURRENT_USER.id })).toEqual(
          expect.objectContaining({
            user: expect.objectContaining({ id: CURRENT_USER.id }),
          }),
        );
      });
    });

    describe('Query getUsers', () => {
      it('should be defined', async () => {
        expect(userResolver.user).toBeDefined();
      });

      it(`should return an array of ${constants.graphql.query.defaultTakeResults} users`, async () => {
        const usersPayload = await userResolver.users({
          take: constants.graphql.query.defaultTakeResults,
        });

        expect(usersPayload).toEqual(
          expect.objectContaining({
            users: expect.arrayContaining([
              expect.objectContaining({ id: CURRENT_USER.id }),
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
    describe('Mutation userCreate', () => {
      it('should be defined', async () => {
        expect(userResolver.userCreate).toBeDefined();
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
          await userResolver.userCreate({
            email,
            firstName,
            lastName,
            password,
            locale: UserLocale.FR,
            gender: UserGender.OTHER,
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
        const { email, firstName, lastName } = CURRENT_USER;
        const password = `${faker.animal.type()}${random(
          1900,
          new Date().getFullYear(),
        )}`;

        expect(
          await userResolver.userCreate({
            email,
            firstName,
            lastName,
            password,
            locale: UserLocale.FR,
            gender: UserGender.OTHER,
          }),
        ).toEqual(
          expect.objectContaining({
            code: 'UserAlreadyExistsError',
            message: expect.any(String),
          }),
        );
      });
    });

    describe('Mutation userUpdate', () => {
      it('should be defined', async () => {
        expect(userResolver.userUpdate).toBeDefined();
      });

      it('should return an updated user from current user', async () => {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = `${firstName.toLowerCase()}@${lastName.toLowerCase()}.com`;
        const password = `${faker.animal.type()}${random(
          1900,
          new Date().getFullYear(),
        )}`;

        expect(
          await userResolver.userUpdate(
            { id: CURRENT_USER.id },
            {
              email,
              firstName,
              lastName,
              password,
            },
            CURRENT_USER,
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

      it('should return an updated user from admin user', async () => {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = `${firstName.toLowerCase()}@${lastName.toLowerCase()}.com`;
        const password = `${faker.animal.type()}${random(
          1900,
          new Date().getFullYear(),
        )}`;

        expect(
          await userResolver.userUpdate(
            { id: CURRENT_USER.id },
            {
              email,
              firstName,
              lastName,
              password,
            },
            ADMIN_USER,
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
          await userResolver.userUpdate(
            { id: faker.datatype.uuid() },
            { password },
            {
              ...CURRENT_USER,
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
          await userResolver.userUpdate(
            { id: OTHER_USER.id },
            { password },
            CURRENT_USER,
          ),
        ).toEqual(
          expect.objectContaining({
            code: 'NotAuthorizedError',
            message: expect.any(String),
          }),
        );
      });
    });

    describe('Mutation userDelete', () => {
      it('should be defined', async () => {
        expect(userResolver.userDelete).toBeDefined();
      });

      it('should return a deleted user from current user', async () => {
        expect(
          await userResolver.userDelete(
            {
              id: CURRENT_USER.id,
            },
            CURRENT_USER,
          ),
        ).toEqual(
          expect.objectContaining({
            isDeleted: true,
          }),
        );
      });

      it('should return a deleted user from admin user', async () => {
        expect(
          await userResolver.userDelete(
            {
              id: CURRENT_USER.id,
            },
            ADMIN_USER,
          ),
        ).toEqual(
          expect.objectContaining({
            isDeleted: true,
          }),
        );
      });

      it('should return an error with code [UserNotFoundError]', async () => {
        expect(
          await userResolver.userDelete(
            { id: faker.datatype.uuid() },
            {
              ...CURRENT_USER,
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
          await userResolver.userDelete({ id: OTHER_USER.id }, CURRENT_USER),
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
