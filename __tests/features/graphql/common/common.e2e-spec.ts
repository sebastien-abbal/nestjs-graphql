import { prisma } from '@features/database/services';
import { GraphQLModule } from '@features/graphql/graphql.module';
import { AllExceptionsFilter } from '@features/_filters/all-exceptions.filter';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import superRequest, { SuperTest, Test as TestItem } from 'supertest';

describe('GraphQL - CommonModule', () => {
  let app: INestApplication;
  let request: SuperTest<TestItem>;

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

  describe('Query - Test', () => {
    const query = `
      query {
        test {
          __typename
        }
      }
    `;

    it('should return a typename [TestSuccess]', async () => {
      return request
        .post('/graphql')
        .send({
          query,
        })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.data?.test?.__typename).toBe('TestSuccess');
        });
    });
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await app.close();
  });
});
