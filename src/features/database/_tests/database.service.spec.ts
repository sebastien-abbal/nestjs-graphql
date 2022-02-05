import { DatabaseService } from '@features/database/database.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('DatabaseService', () => {
  let databaseService: DatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseService],
    }).compile();

    databaseService = module.get<DatabaseService>(DatabaseService);
  });

  it('should be defined', () => {
    expect(databaseService).toBeDefined();
  });
});
