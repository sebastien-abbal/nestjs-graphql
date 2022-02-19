import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../database/services';
import { mockedPrismaService } from '../../../database/_mocks/database.service.mock';
import { UserAvatarService } from '../services';

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
