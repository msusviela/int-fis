/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  testMatch: ['**/?(*.)+(test).[jt]s'],
  collectCoverage: true,
  collectCoverageFrom: [
    'domain/**/*.js',
    '!**/node_modules/**'
  ],
  coverageReporters: ['text', 'lcov'],
};


