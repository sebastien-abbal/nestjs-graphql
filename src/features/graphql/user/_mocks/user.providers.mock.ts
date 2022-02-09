export const mockedUserProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: jest.fn(),
  },
  {
    provide: 'USER_AVATAR_REPOSITORY',
    useFactory: jest.fn(),
  },
];
