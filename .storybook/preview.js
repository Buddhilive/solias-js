/** @type { import('@storybook/html').Preview } */
import {defineCustomElements} from '../loader';

import '../dist/solias/solias.css';

defineCustomElements();

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
