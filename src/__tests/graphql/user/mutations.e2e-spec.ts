import faker from '@faker-js/faker';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import superRequest, { SuperTest, Test as TestItem } from 'supertest';
import { UserGender, UserLocale, UserRole } from '../../../@graphql/generated';
import { USERS } from '../../../features/database/data/seed';
import { prisma } from '../../../features/database/services';
import { GraphQLModule } from '../../../features/graphql/graphql.module';
import {
  generateAnonymousAuthTokenForTest,
  generateUserAuthTokenForTest,
} from '../../services/auth/auth-test.service';

describe('GraphQL - UserModule (mutations)', () => {
  let app: INestApplication;
  let request: SuperTest<TestItem>;
  let userID: string;
  const CURRENT_USER = USERS[0];
  const ADMIN_USER = USERS[1];

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [GraphQLModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    request = superRequest(app.getHttpServer());
  });

  describe('Mutation - UserCreate', () => {
    const query = `
      mutation userCreate($data: UserCreateInput!) {
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
          expect(res.body.data).toBeNull();
          expect(res.body.error).not.toBeNull();
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
              email: 'test@test.fr',
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(400);
          expect(res.body.data).toBeUndefined();
          expect(res.body.error).not.toBeNull();
        });
    });

    it('should return typename UserAlreadyExistsError', async () => {
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

    it('should return typename UserSuccess with a new created user', async () => {
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
              email: 'test@test.fr',
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
  });

  describe('Mutation - UserUpdate', () => {
    const query = `
      mutation userUpdate(
        $where: UserWhereUniqueInput!
        $data: UserUpdateInput!
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
          expect(res.body.data).toBeNull();
          expect(res.body.error).not.toBeNull();
        });
    });

    it('should return typename UserNotFoundError', async () => {
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

    it('should return typename UserSuccess with the current user updated', async () => {
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
          expect(res.body.data?.userUpdate?.user?.firstName).toBe(FIRSTNAME);
          expect(res.body.data?.userUpdate?.user?.gender).toBe(
            UserGender.FEMALE,
          );
          expect(res.body.data?.userUpdate?.user?.locale).toBe(UserLocale.EN);
        });
    });

    it('should return typename NotAuthorizedError because of user permission or role', async () => {
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

    it('should return typename UserSuccess with the updated target user from admin user', async () => {
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
          expect(res.body.data).toBeNull();
          expect(res.body.error).not.toBeNull();
        });
    });

    it('should return typename UserNotFoundError', async () => {
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

    it('should return typename DeletionSuccess from current user', async () => {
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

    it('should return typename NotAuthorizedError because of user permission or role', async () => {
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

    it('should return typename DeletionSuccess from admin user', async () => {
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
    if (userID) await prisma.user.delete({ where: { id: userID } });
    await prisma.$disconnect();
    await app.close();
  });
});
