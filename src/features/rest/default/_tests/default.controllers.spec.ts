import { ConfigModule } from '@features/config/config.module';
import { ConfigController } from '@features/rest/default/config/config.controller';
import { HealthController } from '@features/rest/default/health/health.controller';
import { HealthService } from '@features/rest/default/health/health.service';
import {
  HomeController,
  WELCOME_MESSAGE,
} from '@features/rest/default/home/home.controller';
import { mockedHealthService } from '@features/rest/default/_mocks/health.service.mock';
import { Test, TestingModule } from '@nestjs/testing';

describe('Default module (controllers)', () => {
  let app: TestingModule;

  let homeController: HomeController;
  let healthController: HealthController;
  let configController: ConfigController;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [ConfigModule],
      controllers: [HomeController, HealthController, ConfigController],
    })
      .useMocker((token) => {
        if (token === HealthService) return mockedHealthService;
      })
      .compile();

    homeController = app.get<HomeController>(HomeController);
    healthController = app.get<HealthController>(HealthController);
    configController = app.get<ConfigController>(ConfigController);
  });

  describe('Home controller', () => {
    it('should be defined', () => {
      expect(homeController).toBeDefined();
    });

    it('should return welcome message', () => {
      expect(homeController.getWelcome()).toBe(WELCOME_MESSAGE);
    });
  });

  describe('Health controller', () => {
    it('should be defined', () => {
      expect(healthController).toBeDefined();
    });

    it('should return a status "ok"', () => {
      expect(healthController.getHealthCheck()).toEqual(
        expect.objectContaining({
          status: 'ok',
        }),
      );
    });
  });

  describe('Config controller', () => {
    it('should be defined', () => {
      expect(configController).toBeDefined();
    });

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
    await app?.close();
  });
});
