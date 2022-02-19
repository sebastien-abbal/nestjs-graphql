import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../app.service';

describe('App service', () => {
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  describe('Service definition', () => {
    it('should be defined', () => {
      expect(appService).toBeDefined();
    });

    it('should have property function "checkEnv"', () => {
      expect(typeof appService.checkEnv).toBe('function');
    });
  });
});
