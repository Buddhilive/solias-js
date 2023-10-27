import { newE2EPage } from '@stencil/core/testing';

describe('solias-barchart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solias-barchart></solias-barchart>');

    const element = await page.find('solias-barchart');
    expect(element).toHaveClass('hydrated');
  });
});
