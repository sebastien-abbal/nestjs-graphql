module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@features/(.*)': '<rootDir>/src/features/$1',
    '^@graphql': '<rootDir>/src/@graphql/generated',
    '^@types': '<rootDir>/src/@types',
    '^@utils': '<rootDir>/src/utils',
    '^@config': '<rootDir>/src/config',
  },
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/prisma/',
    '<rootDir>/bin/',
    '<rootDir>/node_modules/',
  ],
};
