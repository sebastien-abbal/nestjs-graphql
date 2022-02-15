import {
  User,
  UserCreateInput,
  UserGender,
  UserLocale,
  UserUpdateInput,
  UserWhereUniqueInput,
} from '@graphql';

export enum UserRole {
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
  USER = 'USER',
}

export const MOCKED_USER_PASSWORD = 'pikachu75';
export const MOCKED_USERS: User[] = [
  {
    id: 'dc4aafb2-3c6c-467f-a5ae-aafc57abac93',
    firstName: 'John',
    lastName: 'DOE',
    locale: 'EN',
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
    gender: UserGender.MALE,
    urlLinkedin: null,
    bannedAt: null,
    isBanned: false,
    deletedAt: null,
    isTermsAccepted: true,
    termsAcceptedAt: new Date('01-01-2022'),
  },
  {
    id: '75bc14d0-d9fb-448a-b263-b0e5072c542b',
    firstName: 'Annabelle',
    lastName: 'DOE',
    locale: UserLocale.EN,
    email: 'annabelle@doe.fr',
    password: '$2a$10$pL6XdVpjuAiyYBRwHfL3/.HNovg56rlFLeCyRn5naA9pi5YmDlJMq', // pikachu75
    phoneIndex: '+33',
    phoneNumber: '987654321',
    isEmailVerified: true,
    isPhoneVerified: true,
    roles: [UserRole.USER],
    createdAt: new Date('01-02-2022'),
    lastLoginAt: new Date(),
    updatedAt: new Date(),
    gender: UserGender.FEMALE,
    urlLinkedin: null,
    bannedAt: null,
    isBanned: false,
    deletedAt: null,
    isTermsAccepted: true,
    termsAcceptedAt: new Date('01-02-2022'),
  },
];

export const mockedUserService = {
  getUser: jest
    .fn()
    .mockImplementation(async ({ where }: { where: UserWhereUniqueInput }) =>
      Promise.resolve(
        MOCKED_USERS.find(
          (item) => item.id === where.id || item.email === where?.email,
        ),
      ),
    ),
  getUsers: jest
    .fn()
    .mockImplementation(async ({ take }: { take?: number }) =>
      Promise.resolve(Array(take).fill(MOCKED_USERS[0])),
    ),
  userCreate: jest
    .fn()
    .mockImplementation(async ({ data }: { data: UserCreateInput }) =>
      Promise.resolve({ ...MOCKED_USERS[0], ...data }),
    ),
  userUpdate: jest
    .fn()
    .mockImplementation(async ({ data }: { data: UserUpdateInput }) =>
      Promise.resolve({ ...MOCKED_USERS[0], ...data }),
    ),
  userDelete: jest.fn(),
};
