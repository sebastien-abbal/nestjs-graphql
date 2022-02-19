import {
  UserCreateInput,
  UserUpdateInput,
  UserWhereUniqueInput,
} from '../../../../@graphql/generated';
import { USERS } from '../../../database/data/seed';

export enum UserRole {
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
  USER = 'USER',
}

export const mockedUserService = {
  getUser: jest
    .fn()
    .mockImplementation(async ({ where }: { where: UserWhereUniqueInput }) =>
      Promise.resolve(
        USERS.find(
          (item) => item.id === where.id || item.email === where?.email,
        ),
      ),
    ),
  getUsers: jest
    .fn()
    .mockImplementation(async ({ take }: { take?: number }) =>
      Promise.resolve(Array(take).fill(USERS[0])),
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
