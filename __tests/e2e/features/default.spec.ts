import { AppModule } from '@features/app.module';
import { DatabaseService } from '@features/database/database.service';
import { WELCOME_MESSAGE } from '@features/default/home/home.controller';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

describe('DefaultModule (e2e)', () => {
  let app: INestApplication;
  let databaseService: DatabaseService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [],
      providers: [DatabaseService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    databaseService = app.get<DatabaseService>(DatabaseService);
  });

  describe('HomeController', () => {
    it('/ (GET)', async () => {
      const result = await request(app.getHttpServer()).get('/');
      expect(result.statusCode).toBe(200);
      expect(result.text).toBe(WELCOME_MESSAGE);
    });

    it('/_health (GET)', async () => {
      const result = await request(app.getHttpServer()).get('/_health');
      expect(result.statusCode).toBe(200);
      expect(result.body).toEqual(
        expect.objectContaining({
          status: 'ok',
        }),
      );
    });

    it('/_config (GET)', async () => {
      const result = await request(app.getHttpServer()).get('/_config');
      expect(result.statusCode).toBe(200);
      expect(result.body).toMatchObject({
        name: expect.any(String),
        company: expect.any(String),
        host: 'localhost',
        port: 3000,
        env: 'test',
      });
    });
  });

  afterAll(async () => {
    await databaseService.clearConnections();
    await app.close();
  });
});
