import { config } from '@config';
import { UserService } from '@features/graphql/user/services';
import { mockedUserService } from '@features/graphql/user/_mocks/user.service.mock';
import { ConfigController } from '@features/rest/default/config.controller';
import { HealthController } from '@features/rest/default/health.controller';
import {
  HomeController,
  WELCOME_MESSAGE,
} from '@features/rest/default/home.controller';
import { HealthService } from '@features/rest/default/services/health.service';
import { mockedHealthService } from '@features/rest/default/_mocks/health.service.mock';
import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';

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
        port: 3000,
        env: 'test',
        hostname: expect.any(String),
        os: expect.any(String),
        memory: expect.any(String),
        uptime: expect.any(String),
      });
    });
  });

  afterAll(async () => {
    await app?.close();
  });
});
