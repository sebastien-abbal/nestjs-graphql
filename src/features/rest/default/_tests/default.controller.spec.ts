import { defaultConfig } from '@config';
import { DatabaseModule } from '@features/database/database.module';
import { DatabaseService } from '@features/database/database.service';
import { ConfigController } from '@features/rest/default/config/config.controller';
import { HealthController } from '@features/rest/default/health/health.controller';
import { HealthService } from '@features/rest/default/health/health.service';
import {
  HomeController,
  WELCOME_MESSAGE,
} from '@features/rest/default/home/home.controller';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('Default module (controllers)', () => {
  let app: TestingModule;

  let homeController: HomeController;
  let healthController: HealthController;
  let configController: ConfigController;

  let databaseService: DatabaseService;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: '.env',
          isGlobal: true,
          load: [() => defaultConfig],
        }),
        DatabaseModule,
      ],
      controllers: [HomeController, HealthController, ConfigController],
      providers: [HealthService, DatabaseService],
    }).compile();

    homeController = app.get<HomeController>(HomeController);
    healthController = app.get<HealthController>(HealthController);
    configController = app.get<ConfigController>(ConfigController);

    databaseService = app.get<DatabaseService>(DatabaseService);
  });

  describe('Home controller', () => {
    it('should return welcome message', () => {
      expect(homeController.getWelcome()).toBe(WELCOME_MESSAGE);
    });
  });

  describe('Health controller', () => {
    it('should return a status "ok"', () => {
      expect(healthController.getHealthCheck()).toEqual(
        expect.objectContaining({
          status: 'ok',
        }),
      );
    });
  });

  describe('Config controller', () => {
    it('should return config payload', () => {
      expect(configController.getConfig()).toMatchObject({
        name: expect.any(String),
        company: expect.any(String),
        host: 'localhost',
        port: 3000,
        env: 'test',
      });
    });
  });

  afterAll(async () => {
    await databaseService?.clearConnections();
    await app?.close();
  });
});
