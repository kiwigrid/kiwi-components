import { newE2EPage } from '@stencil/core/testing';

describe('kiwi-popover', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kiwi-popover></kiwi-popover>');

    const element = await page.find('kiwi-popover');
    expect(element).toHaveClass('hydrated');
  });
});
