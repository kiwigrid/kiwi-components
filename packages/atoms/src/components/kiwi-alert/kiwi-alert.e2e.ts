import { newE2EPage } from '@stencil/core/testing';

describe('kiwi-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kiwi-alert></kiwi-alert>');

    const element = await page.find('kiwi-alert');
    expect(element).toHaveClass('hydrated');
  });
});
