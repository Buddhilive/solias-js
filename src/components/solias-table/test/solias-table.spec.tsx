import { newSpecPage } from '@stencil/core/testing';
import { SoliasTable } from '../solias-table';

describe('solias-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SoliasTable],
      html: `<solias-table></solias-table>`,
    });
    expect(page.root).toEqualHtml(`
      <solias-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solias-table>
    `);
  });
});
