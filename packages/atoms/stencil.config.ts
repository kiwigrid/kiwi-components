import { Config } from '@stencil/core';

export const config: Config = {
  devServer: {
    openBrowser: false,
  },
  namespace: 'atoms',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
