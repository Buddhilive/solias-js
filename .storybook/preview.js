/** @type { import('@storybook/html').Preview } */
import {defineCustomElements} from '../loader';

import '../dist/solias/solias.css';
import SoliasTheme from './SoliasTheme';

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
    docs: {
      components: {
        theme: SoliasTheme
      },
    },
  },
};

export default preview;
