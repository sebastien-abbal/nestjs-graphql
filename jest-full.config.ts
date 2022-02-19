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
    '!src/features/app.service.ts',
    '!src/features/database/services',
  ],
  coverageThreshold: {
    './src/features/': {
      lines: 90,
      smts: 90,
      funcs: 90,
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
