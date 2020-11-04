import { newE2EPage } from '@stencil/core/testing';

describe('kiwi-loading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kiwi-loading></kiwi-loading>');

    const element = await page.find('kiwi-loading');
    expect(element).toHaveClass('hydrated');
  });
});
