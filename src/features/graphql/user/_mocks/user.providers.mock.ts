export const mockedUserProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: jest.fn(),
  },
];
