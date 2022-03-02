import { HealthService } from '@features/rest/default/services/health.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('Health service', () => {
  let healthService: HealthService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthService],
    }).compile();

    healthService = module.get<HealthService>(HealthService);
  });

  describe('Service definition', () => {
    it('should be defined', () => {
      expect(healthService).toBeDefined();
    });

    it('should have property function "getDatabaseConnectionStatus"', () => {
      expect(typeof healthService.getDatabaseConnectionStatus).toBe('function');
    });
  });
});
