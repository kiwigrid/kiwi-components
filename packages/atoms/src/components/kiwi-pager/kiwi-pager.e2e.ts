import { newE2EPage } from '@stencil/core/testing';

describe('kiwi-pager', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kiwi-pager></kiwi-pager>');

    const element = await page.find('kiwi-pager');
    expect(element).toHaveClass('hydrated');
  });
});
