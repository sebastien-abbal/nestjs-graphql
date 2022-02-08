export const mockedHealthService = {
  getTypeOrmConnectionStatus: jest.fn().mockImplementation(() => 'ok'),
};
