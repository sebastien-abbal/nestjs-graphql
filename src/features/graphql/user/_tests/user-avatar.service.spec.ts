import { PrismaService } from '@features/database/services';
import { mockedPrismaService } from '@features/database/_mocks/database.service.mock';
import { UserAvatarService } from '@features/graphql/user/services';
import { Test, TestingModule } from '@nestjs/testing';

describe('User avatar service', () => {
  let userAvatarService: UserAvatarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAvatarService],
    })
      .useMocker((token) => {
        if (token === PrismaService) return mockedPrismaService;
      })
      .compile();

    userAvatarService = module.get<UserAvatarService>(UserAvatarService);
  });

  it('should be defined', () => {
    expect(userAvatarService).toBeDefined();
  });
});
