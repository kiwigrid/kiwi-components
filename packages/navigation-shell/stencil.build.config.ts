import { Config } from '@stencil/core';
import { config as baseConfig } from './stencil.config';

export const config: Config = {
  ...baseConfig,
  tsconfig: './tsconfig.build.json',
};
