import { ConfigModule } from '@features/config/config.module';
import { CommonResolver } from '@features/graphql/common/common.resolver';
import { CommonService } from '@features/graphql/common/common.service';
import { mockedCommonService } from '@features/graphql/common/_mocks/common.service.mock';
import { Test, TestingModule } from '@nestjs/testing';

describe('Common resolver', () => {
  let app: TestingModule;

  let commonResolver: CommonResolver;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [ConfigModule],
      controllers: [CommonResolver],
      providers: [],
    })
      .useMocker((token) => {
        if (token === CommonService) return mockedCommonService;
      })
      .compile();

    commonResolver = app.get<CommonResolver>(CommonResolver);
  });

  describe('Resolver definition', () => {
    it('should be defined', () => {
      expect(commonResolver).toBeDefined();
    });
  });

  describe('Queries', () => {
    describe('Query getTest', () => {
      it('should be defined', async () => {
        expect(commonResolver.getTest).toBeDefined();
      });

      it('should return ok', async () => {
        expect(commonResolver.getTest()).toEqual(
          expect.objectContaining({
            status: 'ok',
          }),
        );
      });
    });
  });

  afterAll(async () => {
    await app?.close();
  });
});
