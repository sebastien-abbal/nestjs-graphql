import { USERS } from '@features/database/data/seed';
import { prisma } from '@features/database/services';
import { GraphQLModule } from '@features/graphql/graphql.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import {
  generateAnonymousAuthTokenForTest,
  generateUserAuthTokenForTest,
} from '@tests/_services/auth/auth-test.service';
import superRequest, { SuperTest, Test as TestItem } from 'supertest';

describe('GraphQL - AuthModule (mutations)', () => {
  let app: INestApplication;
  let request: SuperTest<TestItem>;
  const CURRENT_USER = USERS[0];
  const BANNED_USER = USERS[3];
  const DELETED_USER = USERS[4];

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

    it('should return a typename [WrongCredentialsError]', async () => {
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

    it('should return a typename [AuthUserSuccess]', async () => {
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

    it('should return a typename [AuthAnonymousSuccess]', async () => {
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

  describe('Mutation - AuthRefresh', () => {
    const query = `
      mutation authRefresh($data: AuthRefreshInput!) {
        authRefresh(data: $data) {
          ... on AuthRefreshSuccess {
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

    it('should return a typename [WrongAuthTokenFormatError]', async () => {
      return request
        .post('/graphql')
        .send({
          query,
          variables: {
            data: {
              refreshToken: 'eyJhbGciIUzI1.WRONG_TOKEN.NiIsInI6IkpXVCJ9',
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.authRefresh?.__typename).toBe(
            'WrongAuthTokenFormatError',
          );
        });
    });

    it('should return a typename [UserBannedError]', async () => {
      const refreshToken = generateUserAuthTokenForTest({
        userID: BANNED_USER.id,
        type: 'REFRESH_TOKEN',
      });

      return request
        .post('/graphql')
        .send({
          query,
          variables: {
            data: {
              refreshToken,
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.authRefresh?.__typename).toBe(
            'UserBannedError',
          );
        });
    });

    it('should return a typename [UserDeletedError]', async () => {
      const refreshToken = generateUserAuthTokenForTest({
        userID: DELETED_USER.id,
        type: 'REFRESH_TOKEN',
      });

      return request
        .post('/graphql')
        .send({
          query,
          variables: {
            data: {
              refreshToken,
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.authRefresh?.__typename).toBe(
            'UserDeletedError',
          );
        });
    });

    it('should return a typename [AuthRefreshSuccess] with authenticated user token', async () => {
      const refreshToken = generateUserAuthTokenForTest({
        userID: CURRENT_USER.id,
        type: 'REFRESH_TOKEN',
      });

      return request
        .post('/graphql')
        .send({
          query,
          variables: {
            data: {
              refreshToken,
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.authRefresh).toEqual(
            expect.objectContaining({
              __typename: 'AuthRefreshSuccess',
              accessToken: expect.any(String),
              refreshToken: expect.any(String),
              user: expect.objectContaining({
                id: CURRENT_USER.id,
              }),
            }),
          );
        });
    });

    it('should return a typename [AuthRefreshSuccess] with anonymous token', async () => {
      const refreshToken = generateAnonymousAuthTokenForTest({
        type: 'REFRESH_TOKEN',
      });

      return request
        .post('/graphql')
        .send({
          query,
          variables: {
            data: {
              refreshToken,
            },
          },
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.authRefresh).toEqual(
            expect.objectContaining({
              __typename: 'AuthRefreshSuccess',
              accessToken: expect.any(String),
              refreshToken: expect.any(String),
              user: null,
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
