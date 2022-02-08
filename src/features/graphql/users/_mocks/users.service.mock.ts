import { User } from '@features/graphql/users/entities';
import {
  CreateUserInput,
  GetUserFiltersInput,
  GetUsersFiltersInput,
  UpdateUserInput,
  UserRole,
} from '@features/graphql/users/types';

export const MOCKED_USER: User = {
  id: 'dc4aafb2-3c6c-467f-a5ae-aafc57abac93',
  firstName: 'John',
  lastName: 'DOE',
  email: 'john@doe.fr',
  password: 'pikachu75',
  phoneIndex: '+33',
  phoneNumber: '123456789',
  isEmailVerified: true,
  isPhoneVerified: true,
  roles: [UserRole.USER],
  createdAt: new Date('01-01-2022'),
  lastLoginAt: new Date(),
  updatedAt: new Date(),
};

export const mockedUsersService = {
  getUser: async ({ filters }: { filters: GetUserFiltersInput }) =>
    jest.fn().mockResolvedValue(MOCKED_USER),
  getUsers: async ({
    filters,
    skip,
    take,
  }: {
    filters: GetUsersFiltersInput;
    skip?: number;
    take?: number;
  }) => jest.fn().mockResolvedValue(Array(take).fill(MOCKED_USER)),
  createUser: async ({ data }: { data: CreateUserInput }) =>
    jest.fn().mockResolvedValue({ ...MOCKED_USER, ...data }),
  updateUser: async ({
    userID,
    data,
  }: {
    userID: string;
    data: UpdateUserInput;
  }) => jest.fn().mockResolvedValue({ ...MOCKED_USER, ...data }),
  deleteUser: async ({ userID }: { userID: string }) => jest.fn(),
};
