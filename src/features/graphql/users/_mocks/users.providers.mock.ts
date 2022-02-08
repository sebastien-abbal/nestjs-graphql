export const mockedUsersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: jest.fn(),
  },
];
