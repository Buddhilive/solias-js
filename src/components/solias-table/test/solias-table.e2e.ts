import { newE2EPage } from '@stencil/core/testing';

describe('solias-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solias-table></solias-table>');

    const element = await page.find('solias-table');
    expect(element).toHaveClass('hydrated');
  });
});
