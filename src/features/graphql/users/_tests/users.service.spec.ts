import { UsersService } from '@features/graphql/users/users.service';
import { mockedUsersProviders } from '@features/graphql/users/_mocks/users.providers.mock';
import { Test, TestingModule } from '@nestjs/testing';

describe('Users service', () => {
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [...mockedUsersProviders, UsersService],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(usersService).toBeDefined();
  });
});
