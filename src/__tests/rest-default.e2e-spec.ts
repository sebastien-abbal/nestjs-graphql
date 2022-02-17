import { MOCKED_USERS } from '@features/graphql/user/_mocks/user.service.mock';
import { WELCOME_MESSAGE } from '@features/rest/default/home.controller';
import { RestModule } from '@features/rest/rest.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { generateAuthTokenForTest } from '@tests/services/auth/auth-test.service';
import superRequest, { SuperTest, Test as TestItem } from 'supertest';

describe('Rest - DefaultModule (e2e)', () => {
  let app: INestApplication;
  let request: SuperTest<TestItem>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [RestModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    request = superRequest(app.getHttpServer());
  });

  describe('/ (GET)', () => {
    it('should return the welcome message (code: 200)', async () => {
      return request.get('/').then((res) => {
        expect(res.status).toBe(200);
        expect(res.text).toBe(WELCOME_MESSAGE);
      });
    });
  });

  describe('/_health (GET)', () => {
    it('should return the health status to ok (code: 200)', async () => {
      return request.get('/_health').then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(
          expect.objectContaining({
            status: 'ok',
          }),
        );
      });
    });
  });

  describe('/_config (GET)', () => {
    it('should return an error with unauthorized token (code: 401)', async () => {
      return request.get('/_config').then((res) => {
        expect(res.status).toBe(401);
      });
    });

    it('should return an error with unauthorized token (code: 200)', async () => {
      return request
        .get('/_config')
        .set(
          'Authorization',
          `Bearer ${generateAuthTokenForTest({
            userID: MOCKED_USERS[1].id,
            type: 'ACCESS_TOKEN',
          })}`,
        )
        .then((res) => {
          expect(res.status).toBe(401);
          expect(res.body).toMatchObject({
            name: expect.any(String),
            company: expect.any(String),
            host: 'localhost',
            port: 3000,
            env: 'test',
          });
        });
    });
  });
});
