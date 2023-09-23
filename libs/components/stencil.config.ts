import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'components',
  taskQueue: 'async',
  sourceMap: true,

  extras: {
    experimentalImportInjection: true,
  },
};
