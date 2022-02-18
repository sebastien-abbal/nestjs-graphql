import { GraphQLModule } from '@features/graphql/graphql.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import superRequest, { SuperTest, Test as TestItem } from 'supertest';

describe('GraphQL - CommonModule (e2e)', () => {
  let app: INestApplication;
  let request: SuperTest<TestItem>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [GraphQLModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    request = superRequest(app.getHttpServer());
  });

  describe('Query - Test', () => {
    it('should return the welcome message (code: 200)', async () => {
      return request
        .post('/graphql')
        .send({
          query: `
            query {
              test {
                __typename
              }
            }`,
        })
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
  });
});
