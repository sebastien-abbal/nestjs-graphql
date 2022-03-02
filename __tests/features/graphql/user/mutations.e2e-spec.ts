import faker from '@faker-js/faker';
import { USERS } from '@features/database/data';
import { prisma } from '@features/database/services';
import { GraphQLModule } from '@features/graphql/graphql.module';
import { AllExceptionsFilter } from '@features/_filters/all-exceptions.filter';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import {
  generateAnonymousAuthTokenForTest,
  generateUserAuthTokenForTest,
} from '@tests/_services/auth-test';
import { UserGender, UserLocale, UserRole } from '@types';
import superRequest, { SuperTest, Test as TestItem } from 'supertest';

describe('GraphQL - UserModule (mutations)', () => {
  let app: INestApplication;
  let request: SuperTest<TestItem>;
  let userID: string;
  const CURRENT_USER = USERS[0];
  const ADMIN_USER = USERS[1];
  const EMAIL = 'test@test.fr';
  const DELETED_USER = USERS[5];

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [GraphQLModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(new AllExceptionsFilter(app.get(HttpAdapterHost)));
    await app.init();

    request = superRequest(app.getHttpServer());

    await prisma.user.update({
      where: { id: DELETED_USER.id },
      data: { firstName: DELETED_USER.firstName, deletedAt: new Date() },
    });
  });

  describe('Mutation - UserCreate', () => {
    const query = `
      mutation userCreate($data: UserCreateOneInput!) {
        userCreate(data: $data) {
          __typename
          ... on UserSuccess {
            user {
              id
              firstName
            }
          }
          ... on Error {
            __typename
          }
        }
      }
    `;

    it('should return an unauthorized error', async () => {
      return request
        .post('/graphql')
        .send({
          query,
          variables: {
            data: {
              email: CURRENT_USER.email,
              firstName: CURRENT_USER.firstName,
              lastName: CURRENT_USER.lastName,
              gender: CURRENT_USER.gender,
              locale: CURRENT_USER.locale,
              password: faker.animal.type(),
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200); // GraphQL return always a 200 for an unauthorized error.
          expect(res.body).toEqual(
            expect.objectContaining({
              data: null,
              errors: expect.any(Array),
            }),
          );
        });
    });

    it('should return a wrong parameters error with http code 400', async () => {
      return request
        .post('/graphql')
        .set(
          'Authorization',
          `Bearer ${generateAnonymousAuthTokenForTest({
            type: 'ACCESS_TOKEN',
          })}`,
        )
        .send({
          query,
          variables: {
            data: {
              email: EMAIL,
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(400);
          expect(res.body).toEqual(
            expect.objectContaining({
              errors: expect.any(Array),
            }),
          );
        });
    });

    it('should return a typename [UserAlreadyExistsError]', async () => {
      return request
        .post('/graphql')
        .set(
          'Authorization',
          `Bearer ${generateAnonymousAuthTokenForTest({
            type: 'ACCESS_TOKEN',
          })}`,
        )
        .send({
          query,
          variables: {
            data: {
              email: CURRENT_USER.email,
              firstName: CURRENT_USER.firstName,
              lastName: CURRENT_USER.lastName,
              gender: CURRENT_USER.gender,
              locale: CURRENT_USER.locale,
              password: faker.animal.type(),
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.userCreate?.__typename).toBe(
            'UserAlreadyExistsError',
          );
        });
    });

    it('should return a typename [UserSuccess] with a new user', async () => {
      const FIRSTNAME = 'Elioth';
      return request
        .post('/graphql')
        .set(
          'Authorization',
          `Bearer ${generateAnonymousAuthTokenForTest({
            type: 'ACCESS_TOKEN',
          })}`,
        )
        .send({
          query,
          variables: {
            data: {
              email: EMAIL,
              firstName: FIRSTNAME,
              lastName: 'DOE',
              gender: UserGender.MALE,
              locale: UserLocale.FR,
              password: faker.animal.type(),
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.userCreate?.__typename).toBe('UserSuccess');
          expect(res.body.data?.userCreate?.user?.firstName).toBe(FIRSTNAME);
          userID = res.body.data?.userCreate?.user?.id;
        });
    });

    it('should return a typename [UserSuccess] with a recovered user', async () => {
      const { email, lastName, gender, locale, password } = DELETED_USER;
      const FIRSTNAME = 'Linus';

      return request
        .post('/graphql')
        .set(
          'Authorization',
          `Bearer ${generateAnonymousAuthTokenForTest({
            type: 'ACCESS_TOKEN',
          })}`,
        )
        .send({
          query,
          variables: {
            data: {
              email,
              firstName: FIRSTNAME,
              lastName,
              gender,
              locale,
              password,
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.userCreate?.__typename).toBe('UserSuccess');
          expect(res.body.data?.userCreate?.user?.firstName).toBe(FIRSTNAME);
        });
    });
  });

  describe('Mutation - UserUpdate', () => {
    const query = `
      mutation userUpdate(
        $where: UserWhereUniqueInput!
        $data: UserUpdateOneInput!
      ) {
        userUpdate(where: $where, data: $data) {
          __typename
          ... on UserSuccess {
            user {
              id
              firstName
              gender
              locale
            }
          }
          ... on Error {
            __typename
          }
        }
      }
    `;

    it('should return an unauthorized error', async () => {
      return request
        .post('/graphql')
        .send({
          query,
          variables: {
            where: { id: userID },
            data: {
              email: CURRENT_USER.email,
              firstName: CURRENT_USER.firstName,
              lastName: CURRENT_USER.lastName,
              gender: CURRENT_USER.gender,
              locale: CURRENT_USER.locale,
              password: faker.animal.type(),
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200); // GraphQL return always a 200 for an unauthorized error.
          expect(res.body).toEqual(
            expect.objectContaining({
              data: null,
              errors: expect.any(Array),
            }),
          );
        });
    });

    it('should return a typename [UserNotFoundError]', async () => {
      return request
        .post('/graphql')
        .set(
          'Authorization',
          `Bearer ${generateUserAuthTokenForTest({
            userID: CURRENT_USER.id,
            type: 'ACCESS_TOKEN',
          })}`,
        )
        .send({
          query,
          variables: {
            where: { id: 'xxx-xxxx-xxxxx' },
            data: {
              email: CURRENT_USER.email,
              firstName: CURRENT_USER.firstName,
              lastName: CURRENT_USER.lastName,
              gender: CURRENT_USER.gender,
              locale: CURRENT_USER.locale,
              password: faker.animal.type(),
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.userUpdate?.__typename).toBe(
            'UserNotFoundError',
          );
        });
    });

    it('should return a typename [UserSuccess] with the current user updated', async () => {
      const FIRSTNAME = 'Vanessa';
      return request
        .post('/graphql')
        .set(
          'Authorization',
          `Bearer ${generateUserAuthTokenForTest({
            userID,
            type: 'ACCESS_TOKEN',
            roles: [UserRole.USER],
          })}`,
        )
        .send({
          query,
          variables: {
            where: { id: userID },
            data: {
              firstName: FIRSTNAME,
              gender: UserGender.FEMALE,
              locale: UserLocale.EN,
              password: faker.animal.type(),
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.userUpdate?.__typename).toBe('UserSuccess');
          expect(res.body.data?.userUpdate?.user).toEqual(
            expect.objectContaining({
              firstName: FIRSTNAME,
              gender: UserGender.FEMALE,
              locale: UserLocale.EN,
            }),
          );
        });
    });

    it('should return a typename [NotAuthorizedError] because of user permission or role', async () => {
      return request
        .post('/graphql')
        .set(
          'Authorization',
          `Bearer ${generateUserAuthTokenForTest({
            userID: CURRENT_USER.id,
            type: 'ACCESS_TOKEN',
          })}`,
        )
        .send({
          query,
          variables: {
            where: { id: userID },
            data: {
              password: faker.animal.type(),
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.userUpdate?.__typename).toBe(
            'NotAuthorizedError',
          );
        });
    });

    it('should return a typename [UserSuccess] with the updated target user from admin user', async () => {
      const FIRSTNAME = 'Barbara';

      return request
        .post('/graphql')
        .set(
          'Authorization',
          `Bearer ${generateUserAuthTokenForTest({
            userID: ADMIN_USER.id,
            type: 'ACCESS_TOKEN',
          })}`,
        )
        .send({
          query,
          variables: {
            where: { id: userID },
            data: {
              firstName: FIRSTNAME,
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.userUpdate?.__typename).toBe('UserSuccess');
          expect(res.body.data?.userUpdate?.user?.firstName).toBe(FIRSTNAME);
        });
    });
  });

  describe('Mutation - UserDelete', () => {
    const query = `
      mutation userDelete($where: UserWhereUniqueInput!) {
        userDelete(where: $where) {
          __typename
          ... on DeletionSuccess {
            isDeleted
          }
          ... on Error {
            __typename
          }
        }
      }
    `;

    it('should return an unauthorized error', async () => {
      return request
        .post('/graphql')
        .send({
          query,
          variables: {
            where: { id: userID },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200); // GraphQL return always a 200 for an unauthorized error.
          expect(res.body).toEqual(
            expect.objectContaining({
              data: null,
              errors: expect.any(Array),
            }),
          );
        });
    });

    it('should return a typename [UserNotFoundError]', async () => {
      return request
        .post('/graphql')
        .set(
          'Authorization',
          `Bearer ${generateUserAuthTokenForTest({
            userID: CURRENT_USER.id,
            type: 'ACCESS_TOKEN',
          })}`,
        )
        .send({
          query,
          variables: {
            where: { id: 'xxx-xxxx-xxxxx' },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.userDelete?.__typename).toBe(
            'UserNotFoundError',
          );
        });
    });

    it('should return a typename [DeletionSuccess] from current user', async () => {
      return request
        .post('/graphql')
        .set(
          'Authorization',
          `Bearer ${generateUserAuthTokenForTest({
            userID,
            type: 'ACCESS_TOKEN',
            roles: [UserRole.USER],
          })}`,
        )
        .send({
          query,
          variables: {
            where: { id: userID },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.userDelete?.__typename).toBe('DeletionSuccess');
          expect(res.body.data?.userDelete?.isDeleted).toBe(true);
        });
    });

    it('should return a typename [NotAuthorizedError] because of user permission or role', async () => {
      return request
        .post('/graphql')
        .set(
          'Authorization',
          `Bearer ${generateUserAuthTokenForTest({
            userID: CURRENT_USER.id,
            type: 'ACCESS_TOKEN',
          })}`,
        )
        .send({
          query,
          variables: {
            where: { id: userID },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.userDelete?.__typename).toBe(
            'NotAuthorizedError',
          );
        });
    });

    it('should return a typename [DeletionSuccess] from admin user', async () => {
      await prisma.user.update({
        where: { id: userID },
        data: { deletedAt: null },
      });

      return request
        .post('/graphql')
        .set(
          'Authorization',
          `Bearer ${generateUserAuthTokenForTest({
            userID: ADMIN_USER.id,
            type: 'ACCESS_TOKEN',
          })}`,
        )
        .send({
          query,
          variables: {
            where: { id: userID },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.userDelete?.__typename).toBe('DeletionSuccess');
          expect(res.body.data?.userDelete?.isDeleted).toBe(true);
        });
    });
  });

  afterAll(async () => {
    await prisma.user.update({
      where: { id: DELETED_USER.id },
      data: { firstName: DELETED_USER.firstName, deletedAt: new Date() },
    });
    if (userID) await prisma.user.delete({ where: { id: userID } });
    await prisma.$disconnect();
    await app.close();
  });
});
