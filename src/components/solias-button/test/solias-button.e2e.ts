import { newE2EPage } from '@stencil/core/testing';

describe('solias-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solias-button></solias-button>');

    const element = await page.find('solias-button');
    expect(element).toHaveClass('hydrated');
  });
});
