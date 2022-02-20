import { USERS } from '@features/database/data/seed';
import { UserCreateInput, UserUpdateInput, UserWhereUniqueInput } from '@types';
import { clamp } from '@utils';
import { hashSync } from 'bcrypt';

export const mockedUserService = {
  getUser: jest
    .fn()
    .mockImplementation(async ({ where }: { where: UserWhereUniqueInput }) => {
      const user = USERS.find(
        (item) => item.id === where.id || item.email === where?.email,
      );
      return Promise.resolve(
        user
          ? {
              ...user,
              password: hashSync(user.password, 10),
            }
          : null,
      );
    }),
  getUsers: jest.fn().mockImplementation(async ({ take }: { take?: number }) =>
    Promise.resolve(
      USERS.slice(0, clamp(0, USERS.length, take)).map((user) => ({
        ...user,
        password: hashSync(user.password, 10),
      })),
    ),
  ),
  userCreate: jest
    .fn()
    .mockImplementation(async ({ data }: { data: UserCreateInput }) =>
      Promise.resolve({ ...USERS[0], ...data }),
    ),
  userUpdate: jest
    .fn()
    .mockImplementation(async ({ data }: { data: UserUpdateInput }) =>
      Promise.resolve({ ...USERS[0], ...data }),
    ),
  userDelete: jest.fn(),
};
