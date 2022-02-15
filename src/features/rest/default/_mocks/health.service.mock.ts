export const mockedHealthService = {
  getDatabaseConnectionStatus: jest.fn().mockImplementation(() => 'ok'),
};
