module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testRegex: '.*\\.spec\\.ts$',
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/prisma/',
    '<rootDir>/bin/',
    '<rootDir>/node_modules/',
    '<rootDir>/.github/',
  ],
  moduleNameMapper: {
    '^@features/(.*)': '<rootDir>/src/features/$1',
    '^@tests/(.*)': '<rootDir>/__tests/$1',
    '^@types': '<rootDir>/src/@types',
    '^@utils': '<rootDir>/src/utils',
    '^@config': '<rootDir>/src/config',
  },
};
