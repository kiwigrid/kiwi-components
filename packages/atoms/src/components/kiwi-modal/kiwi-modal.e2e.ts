import { newE2EPage } from '@stencil/core/testing';

describe('kiwi-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kiwi-modal></kiwi-modal>');

    const element = await page.find('kiwi-modal');
    expect(element).toHaveClass('hydrated');
  });
});
