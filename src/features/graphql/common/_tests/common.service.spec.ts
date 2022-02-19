import { Test, TestingModule } from '@nestjs/testing';
import { CommonService } from '../services';

describe('Common service', () => {
  let commonService: CommonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonService],
    }).compile();

    commonService = module.get<CommonService>(CommonService);
  });

  describe('Service definition', () => {
    it('should be defined', () => {
      expect(commonService).toBeDefined();
    });
  });
});
