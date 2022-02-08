import { CommonService } from '@features/graphql/common/common.service';
import { Test, TestingModule } from '@nestjs/testing';

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
