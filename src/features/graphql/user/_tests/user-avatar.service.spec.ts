import { UserAvatarService } from '@features/graphql/user/services';
import { mockedUserProviders } from '@features/graphql/user/_mocks/user.providers.mock';
import { Test, TestingModule } from '@nestjs/testing';

describe('User avatar service', () => {
  let userAvatarService: UserAvatarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [...mockedUserProviders, UserAvatarService],
    }).compile();

    userAvatarService = module.get<UserAvatarService>(UserAvatarService);
  });

  it('should be defined', () => {
    expect(userAvatarService).toBeDefined();
  });
});
