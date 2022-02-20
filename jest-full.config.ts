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
    '!src/features/app.module.ts',
    '!src/features/database/services',
  ],
  coverageThreshold: {
    './src/features/': {
      lines: 95,
      smts: 95,
      funcs: 95,
    },
    './src/utils/': {
      lines: 100,
      smts: 100,
      branch: 100,
      funcs: 100,
    },
  },
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/prisma/',
    '<rootDir>/bin/',
    '<rootDir>/node_modules/',
    '<rootDir>/.github/',
  ],
};
