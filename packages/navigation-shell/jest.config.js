// Jest config for running in IDE

// const { pathsToModuleNameMapper } = require('ts-jest/utils');
// const { compilerOptions } = require('./tsconfig.json');

// const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, {
//   prefix: '<rootDir>/',
// });

module.exports = {
  preset: '@stencil/core/testing',
  // moduleNameMapper: {
  //   // typescript path mappings
  //   ...moduleNameMapper,
  // },
  // globalSetup: '<rootDir>/jest.globalSetup.ts',
  // setupFiles: ['jest-date-mock'],
};
