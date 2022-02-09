export const mockedUserProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: jest.fn(),
  },
];
