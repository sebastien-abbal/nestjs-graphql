import { USERS } from '@features/database/data';
import { prisma } from '@features/database/services';
import { GraphQLModule } from '@features/graphql/graphql.module';
import { AllExceptionsFilter } from '@features/_filters/all-exceptions.filter';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { generateUserAuthTokenForTest } from '@tests/_services/auth-test';
import superRequest, { SuperTest, Test as TestItem } from 'supertest';

describe('GraphQL - UserModule (field resolvers)', () => {
  let app: INestApplication;
  let request: SuperTest<TestItem>;
  const CURRENT_USER = USERS[0];
  const BANNED_USER = USERS[3];
  const DELETED_USER = USERS[4];

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [GraphQLModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(new AllExceptionsFilter(app.get(HttpAdapterHost)));
    await app.init();

    request = superRequest(app.getHttpServer());
  });

  describe('Resolver - UserModelResolver', () => {
    const query = `
      query user($where: UserWhereUniqueInput!) {
        user(where: $where) {
          __typename
          ... on UserSuccess {
            user {
              id
              isTermsAccepted
              isBanned
              isDeleted
              avatar {
                id
              }
            }
          }
          ... on Error {
            __typename
          }
        }
      }
    `;

    it('should return banned user with custom resolved fields', async () => {
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
            where: {
              id: BANNED_USER.id,
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.user?.user).toEqual(
            expect.objectContaining({
              isBanned: true,
              isDeleted: false,
            }),
          );
        });
    });

    it('should return deleted user with custom resolved fields', async () => {
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
            where: {
              id: DELETED_USER.id,
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.user?.user).toEqual(
            expect.objectContaining({
              isBanned: false,
              isDeleted: true,
            }),
          );
        });
    });

    it('should return an user with custom resolved fields', async () => {
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
            where: {
              id: CURRENT_USER.id,
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.user?.user).toEqual(
            expect.objectContaining({
              isBanned: false,
              isDeleted: false,
              isTermsAccepted: true,
              avatar: expect.objectContaining({
                id: expect.any(String),
              }),
            }),
          );
        });
    });
  });

  describe('Resolver - UserAvatarPictureModelResolver', () => {
    const query = `
      query user($where: UserWhereUniqueInput!) {
        user(where: $where) {
          __typename
          ... on UserSuccess {
            user {
              avatar {
                url
              }
            }
          }
          ... on Error {
            __typename
          }
        }
      }
    `;

    it('should return user avatar with generated url', async () => {
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
            where: {
              id: CURRENT_USER.id,
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.user?.user?.avatar).toEqual(
            expect.objectContaining({
              url: expect.any(String),
            }),
          );
        });
    });
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await app.close();
  });
});
