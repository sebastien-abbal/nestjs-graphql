import { constants } from '@config';

export const mockedDatabaseProviders = [
  {
    name: constants.databases.postgres.name,
    provide: constants.databases.postgres.providerName,
    useFactory: jest.fn(),
  },
];
