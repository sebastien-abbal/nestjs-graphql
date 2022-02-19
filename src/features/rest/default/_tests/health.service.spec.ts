import { Test, TestingModule } from '@nestjs/testing';
import { HealthService } from '../services/health.service';

describe('Health service', () => {
  let healthService: HealthService;

  beforeEach(async () => {
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
