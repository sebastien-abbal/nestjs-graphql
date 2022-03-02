import { USERS } from '@features/database/data';
import { prisma } from '@features/database/services';
import { GraphQLModule } from '@features/graphql/graphql.module';
import { AllExceptionsFilter } from '@features/_filters/all-exceptions.filter';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { generateUserAuthTokenForTest } from '@tests/_services/auth-test';
import superRequest, { SuperTest, Test as TestItem } from 'supertest';

describe('GraphQL - UserModule (queries)', () => {
  let app: INestApplication;
  let request: SuperTest<TestItem>;
  const CURRENT_USER = USERS[0];

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

  describe('Query - User', () => {
    const query = `
      query user($where: UserWhereUniqueInput!) {
        user(where: $where) {
          __typename
          ... on UserSuccess {
            user {
              id
            }
          }
          ... on Error {
            __typename
          }
        }
      }
    `;

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
            where: {
              id: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.user?.__typename).toBe('UserNotFoundError');
        });
    });

    it('should return a typename [UserSuccess]', async () => {
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
          expect(res.body.data?.user?.__typename).toBe('UserSuccess');
          expect(res.body.data?.user?.user?.id).toBe(CURRENT_USER.id);
        });
    });
  });

  describe('Query - Users', () => {
    const query = `
      query users(
        $where: UserWhereInput
        $cursor: UserWhereUniqueInput
        $orderBy: UserOrderByWithRelationInput
        $take: Int
        $skip: Int
      ) {
        users(
          where: $where
          cursor: $cursor
          orderBy: $orderBy
          take: $take
          skip: $skip
        ) {
          __typename
          ... on UsersSuccess {
            users {
              id
              lastName
            }
          }
        }
      }
    `;

    it('should return a typename [UsersSuccess]', async () => {
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
              lastName: { equals: CURRENT_USER.lastName },
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.users?.__typename).toBe('UsersSuccess');
          expect(res.body.data?.users?.users?.length).toBeGreaterThanOrEqual(1);
          expect(res.body.data?.users?.users[0]?.lastName).toBe(
            CURRENT_USER.lastName,
          );
        });
    });
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await app.close();
  });
});
