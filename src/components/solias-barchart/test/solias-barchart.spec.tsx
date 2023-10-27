import { newSpecPage } from '@stencil/core/testing';
import { SoliasBarchart } from '../solias-barchart';

describe('solias-barchart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SoliasBarchart],
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
