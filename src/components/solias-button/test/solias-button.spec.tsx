import { newSpecPage } from '@stencil/core/testing';
import { SoliasButton } from '../solias-button';

describe('solias-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SoliasButton],
      html: `<solias-button></solias-button>`,
    });
    expect(page.root).toEqualHtml(`
      <solias-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solias-button>
    `);
  });
});
