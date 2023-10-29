import { createChart } from './chart';
import { cities } from '../script/sample-data';

/**
 * This is basic bar chart.
## Component

```html
<solias-chart data="data" options="options"></solias-chart>
```

## Properties

| Property  | Attribute | Description   | Type                     | Default     |
| --------- | --------- | ------------- | ------------------------ | ----------- |
| `data`    | --        | Input data    | `SoliasDefaultChartData` | `undefined` |
| `options` | --        | Chart Options | `SoliasChartOptions`     | `undefined` |

#### Type `SoliasDefaultChartData`

```js 
SoliasDefaultChartData {
    [key: string]: number
}
```

#### Type `SoliasChartOptions`

```js
SoliasChartOptions {
    height?: number | null;
    width?: number | null;
    color?: string;
}
```
## Preview
 */

export default {
  title: 'Examples/Bar Chart',
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
        code: `<solias-chart data="data" options="options"></solias-chart>`,
      }
    }
  }
};

/**
 * This is basic bar chart
 */
export const Basic = {
  args: {
    data: cities,
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
    data: cities,
    options: {
      color: '#f9ab00',
      width: 500,
      height: 300
    }
  },
};