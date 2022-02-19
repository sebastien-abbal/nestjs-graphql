import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import superRequest, { SuperTest, Test as TestItem } from 'supertest';
import { USERS } from '../../../features/database/data/seed';
import { prisma } from '../../../features/database/services';
import { GraphQLModule } from '../../../features/graphql/graphql.module';

describe('GraphQL - AuthModule (mutations)', () => {
  let app: INestApplication;
  let request: SuperTest<TestItem>;
  const CURRENT_USER = USERS[0];

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [GraphQLModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    request = superRequest(app.getHttpServer());
  });

  describe('Mutation - AuthUser', () => {
    const query = `
      mutation authUser($data: AuthUserInput!) {
        authUser(data: $data) {
          ... on AuthUserSuccess {
            __typename
            user {
              id
            }
            accessToken
            refreshToken
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
              password: 'wrong-password',
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.authUser?.__typename).toBe(
            'WrongCredentialsError',
          );
        });
    });

    it('should return a typename AuthUserSuccess with authToken, refreshToken and user', async () => {
      return request
        .post('/graphql')
        .send({
          query,
          variables: {
            data: {
              email: CURRENT_USER.email,
              password: CURRENT_USER.password,
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.authUser).toEqual(
            expect.objectContaining({
              __typename: 'AuthUserSuccess',
              accessToken: expect.any(String),
              refreshToken: expect.any(String),
              user: expect.objectContaining({
                id: CURRENT_USER.id,
              }),
            }),
          );
        });
    });
  });

  describe('Mutation - AuthAnonymous', () => {
    const query = `
      mutation authAnonymous {
        authAnonymous {
          __typename
          ... on AuthAnonymousSuccess {
            accessToken
            refreshToken
          }
        }
      }
    `;

    it('should return a typename AuthAnonymousSuccess with authToken and refreshToken', async () => {
      return request
        .post('/graphql')
        .send({
          query,
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.authAnonymous).toEqual(
            expect.objectContaining({
              __typename: 'AuthAnonymousSuccess',
              accessToken: expect.any(String),
              refreshToken: expect.any(String),
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
