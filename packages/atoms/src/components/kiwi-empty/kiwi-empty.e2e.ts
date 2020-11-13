import { newE2EPage } from '@stencil/core/testing';

describe('kiwi-empty', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kiwi-empty></kiwi-empty>');

    const element = await page.find('kiwi-empty');
    expect(element).toHaveClass('hydrated');
  });
});
