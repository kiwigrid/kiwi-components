import { newE2EPage } from '@stencil/core/testing';

describe('kiwi-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kiwi-toast></kiwi-toast>');

    const element = await page.find('kiwi-toast');
    expect(element).toHaveClass('hydrated');
  });
});
