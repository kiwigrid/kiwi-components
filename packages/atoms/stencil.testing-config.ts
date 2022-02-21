import { Config } from '@stencil/core';
import chromium from 'chromium';
import { config as baseConfig } from './stencil.config';

const chromePath = process.env['CHROME_PATH'] || chromium.path;
if (!chromePath) {
  console.warn(
    'No current chromium is installed. E2E tests will use outdated chromium version bundled with puppeteer.',
  );
} else {
  console.log(`E2E tests run with: ${chromePath}`);
}

export const config: Config = {
  ...baseConfig,

  tsconfig: './tsconfig.json',

  extras: {
    // Without this option puppeteer tests are flaky for whatever reason.
    slotChildNodesFix: true,
  },

  testing: {
    moduleNameMapper: {
      '^lodash-es$': 'lodash',
    },

    testPathIgnorePatterns: ['/node_modules/', 'dev-.*', '/dist/', '/www/'],

    globalSetup: '<rootDir>/jest.globalSetup.ts',

    setupFiles: ['jest-date-mock'],
    // E2E
    browserArgs: ['--disable-web-security', '--no-sandbox'],
    browserHeadless: true,
    browserExecutablePath: chromePath,
  },
};
