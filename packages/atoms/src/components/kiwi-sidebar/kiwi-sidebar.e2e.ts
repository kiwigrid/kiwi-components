import { newE2EPage } from '@stencil/core/testing';

describe('kiwi-sidebar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kiwi-sidebar></kiwi-sidebar>');

    const element = await page.find('kiwi-sidebar');
    expect(element).toHaveClass('hydrated');
  });
});
