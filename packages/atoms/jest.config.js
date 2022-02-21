module.exports = {
  preset: '@stencil/core/testing',

  testRunner: 'jasmine2',
  globalSetup: '<rootDir>/jest.globalSetup.ts',
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
  setupFiles: ['jest-date-mock'],
};
