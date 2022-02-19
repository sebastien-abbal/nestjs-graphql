import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../database/services';
import { mockedPrismaService } from '../../../database/_mocks/database.service.mock';
import { UserService } from '../services';

describe('User service', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    })
      .useMocker((token) => {
        if (token === PrismaService) return mockedPrismaService;
      })
      .compile();

    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });
});
