import { DatabaseService } from '@features/database/services';
import { Test, TestingModule } from '@nestjs/testing';

describe('Database service', () => {
  let databaseService: DatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseService],
    }).compile();

    databaseService = module.get<DatabaseService>(DatabaseService);
  });

  describe('Service definition', () => {
    it('should be defined', () => {
      expect(databaseService).toBeDefined();
    });
  });
});
