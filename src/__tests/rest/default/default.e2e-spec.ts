import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import superRequest, { SuperTest, Test as TestItem } from 'supertest';
import { USERS } from '../../../features/database/data/seed';
import { WELCOME_MESSAGE } from '../../../features/rest/default/home.controller';
import { RestModule } from '../../../features/rest/rest.module';
import { generateUserAuthTokenForTest } from '../../_services/auth/auth-test.service';

describe('Rest - DefaultModule', () => {
  let app: INestApplication;
  let request: SuperTest<TestItem>;
  const ADMIN_USER = USERS[1];

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
    it('should return the welcome message', async () => {
      return request.get('/').then((res) => {
        expect(res.status).toBe(200);
        expect(res.text).toBe(WELCOME_MESSAGE);
      });
    });
  });

  describe('/_health (GET)', () => {
    it('should return the health status to ok', async () => {
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
    it('should return an unauthorized token error with http code 401', async () => {
      return request.get('/_config').then((res) => {
        expect(res.status).toBe(401);
      });
    });

    it('should return the server config', async () => {
      return request
        .get('/_config')
        .set(
          'Authorization',
          `Bearer ${generateUserAuthTokenForTest({
            userID: ADMIN_USER.id,
            type: 'ACCESS_TOKEN',
          })}`,
        )
        .then((res) => {
          expect(res.status).toBe(200);
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
