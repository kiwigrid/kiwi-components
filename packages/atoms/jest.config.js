module.exports = {
  preset: '@stencil/core/testing',

  globalSetup: '<rootDir>/jest.globalSetup.ts',
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
  setupFiles: ['jest-date-mock'],
};
