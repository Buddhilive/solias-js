import { createChart } from './chart';

/**
 * This is basic bar chart
 */

export default {
  title: 'Components/Chart',
  tags: ['autodocs'],
  argTypes: {
    data: { control: 'object'},
    options:  { control: 'object' },
  },
  render: ({ options, ...args }) => {
    return createChart({ options, ...args });
  },
  parameters: {
    docs: {
      source: {
        code: `<solias-barchart data="data" options="options"></solias-barchart>`,
      }
    }
  }
};

/**
 * This is basic bar chart
 */
export const Basic = {
  args: {
    options: {
      color: '#00A0AF',
      width: 500,
      height: 300
    }
  },
};

/**
 * Color Changed
 */
export const ChangeColor = {
  args: {
    options: {
      color: '#f9ab00',
      width: 500,
      height: 300
    }
  },
};