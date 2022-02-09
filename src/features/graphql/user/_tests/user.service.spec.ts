import { UserService } from '@features/graphql/user/user.service';
import { mockedUserProviders } from '@features/graphql/user/_mocks/user.providers.mock';
import { Test, TestingModule } from '@nestjs/testing';

describe('User service', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [...mockedUserProviders, UserService],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });
});
