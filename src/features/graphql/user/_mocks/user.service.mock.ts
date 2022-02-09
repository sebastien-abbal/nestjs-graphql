import { User } from '@features/graphql/user/entities';
import {
  CreateUserInput,
  GetUserFiltersInput,
  UpdateUserInput,
  UserLocale,
  UserRole,
} from '@features/graphql/user/types';

export const MOCKED_USER_PASSWORD = 'pikachu75';
export const MOCKED_USER: User = {
  id: 'dc4aafb2-3c6c-467f-a5ae-aafc57abac93',
  firstName: 'John',
  lastName: 'DOE',
  locale: UserLocale.EN,
  email: 'john@doe.fr',
  password: '$2a$10$pL6XdVpjuAiyYBRwHfL3/.HNovg56rlFLeCyRn5naA9pi5YmDlJMq', // pikachu75
  phoneIndex: '+33',
  phoneNumber: '123456789',
  isEmailVerified: true,
  isPhoneVerified: true,
  roles: [UserRole.USER],
  createdAt: new Date('01-01-2022'),
  lastLoginAt: new Date(),
  updatedAt: new Date(),
  avatars: [],
};

export const mockedUserService = {
  getUser: jest
    .fn()
    .mockImplementation(async ({ filters }: { filters: GetUserFiltersInput }) =>
      Promise.resolve(
        filters?.email === MOCKED_USER.email ||
          filters?.userID === MOCKED_USER.id
          ? MOCKED_USER
          : null,
      ),
    ),
  getUsers: jest
    .fn()
    .mockImplementation(async ({ take }: { take?: number }) =>
      Promise.resolve(Array(take).fill(MOCKED_USER)),
    ),
  createUser: jest
    .fn()
    .mockImplementation(async ({ data }: { data: CreateUserInput }) =>
      Promise.resolve({ ...MOCKED_USER, ...data }),
    ),
  updateUser: jest
    .fn()
    .mockImplementation(async ({ data }: { data: UpdateUserInput }) =>
      Promise.resolve({ ...MOCKED_USER, ...data }),
    ),
  deleteUser: jest.fn(),
};
