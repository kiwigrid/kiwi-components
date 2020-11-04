import { newE2EPage } from '@stencil/core/testing';

describe('kiwi-skeleton', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kiwi-skeleton></kiwi-skeleton>');

    const element = await page.find('kiwi-skeleton');
    expect(element).toHaveClass('hydrated');
  });
});
