module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testRegex: '.(spec|e2e-spec).ts$',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/features/**/*.ts',
    'src/utils/**/*.ts',
    '!src/features/**/lambda.ts',
    '!src/features/**/*.mock.ts',
  ],
  coverageThreshold: {
    './src/features/': {
      lines: 50,
    },
    './src/utils/': {
      lines: 100,
      smts: 100,
      branch: 100,
      funcs: 100,
    },
  },
  moduleNameMapper: {
    '^@features/(.*)': '<rootDir>/src/features/$1',
    '^@tests/(.*)': '<rootDir>/src/__tests/$1',
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
    '<rootDir>/.github/',
  ],
};
