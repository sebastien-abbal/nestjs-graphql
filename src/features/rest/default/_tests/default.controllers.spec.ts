import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { config } from '../../../../config';
import { UserService } from '../../../graphql/user/services';
import { mockedUserService } from '../../../graphql/user/_mocks/user.service.mock';
import { ConfigController } from '../config.controller';
import { HealthController } from '../health.controller';
import { HomeController, WELCOME_MESSAGE } from '../home.controller';
import { HealthService } from '../services/health.service';
import { mockedHealthService } from '../_mocks/health.service.mock';

describe('Default module (controllers)', () => {
  let app: TestingModule;

  let homeController: HomeController;
  let healthController: HealthController;
  let configController: ConfigController;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          publicKey: config.auth.jwtPublicKey,
          privateKey: config.auth.jwtPrivateKey,
        }),
      ],
      controllers: [HomeController, HealthController, ConfigController],
    })
      .useMocker((token) => {
        if (token === HealthService) return mockedHealthService;
        if (token === UserService) return mockedUserService;
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

    it('should return a status "ok"', async () => {
      expect(await healthController.getHealthCheck()).toEqual(
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
