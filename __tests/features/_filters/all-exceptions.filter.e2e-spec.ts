import { prisma } from '@features/database/services';
import { RestModule } from '@features/rest/rest.module';
import { AllExceptionsFilter } from '@features/_filters/all-exceptions.filter';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import superRequest, { SuperTest, Test as TestItem } from 'supertest';

describe('Filter - AllExceptionsFilter', () => {
  let app: INestApplication;
  let request: SuperTest<TestItem>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [RestModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(new AllExceptionsFilter(app.get(HttpAdapterHost)));
    await app.init();

    request = superRequest(app.getHttpServer());
  });

  describe('Catch error', () => {
    it('should return an invalid token error', async () => {
      return request
        .get('/_config')
        .send()
        .then((res) => {
          expect(res.status).toBe(401);
          expect(res.body).toMatchObject({
            statusCode: 401,
            timestamp: expect.any(String),
            path: '/_config',
          });
          expect(Object.keys(res.body).length).toBe(3);
          expect(Object.keys(res.body).includes('message')).toBe(false);
          expect(Object.keys(res.body).includes('msg')).toBe(false);
        });
    });

    it('should return an url not found error', async () => {
      return request
        .get('/__catch_me_if_you_can__')
        .send()
        .then((res) => {
          expect(res.status).toBe(404);
          expect(res.body).toMatchObject({
            statusCode: 404,
            timestamp: expect.any(String),
            path: '/__catch_me_if_you_can__',
          });
          expect(Object.keys(res.body).length).toBe(3);
          expect(Object.keys(res.body).includes('message')).toBe(false);
          expect(Object.keys(res.body).includes('msg')).toBe(false);
        });
    });

    it('should not return an error payload on success', async () => {
      return request
        .get('/')
        .send()
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body).not.toMatchObject({
            statusCode: 200,
            timestamp: expect.any(String),
            path: '/',
          });
        });
    });
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await app.close();
  });
});
