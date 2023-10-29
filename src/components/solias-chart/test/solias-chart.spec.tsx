import { newSpecPage } from '@stencil/core/testing';
import { SoliasChartComponent } from '../solias-chart';

describe('solias-barchart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SoliasChartComponent],
      html: `<solias-barchart></solias-barchart>`,
    });
    expect(page.root).toEqualHtml(`
      <solias-barchart>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solias-barchart>
    `);
  });
});
