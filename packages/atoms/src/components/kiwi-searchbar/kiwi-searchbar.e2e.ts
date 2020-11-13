import { newE2EPage } from '@stencil/core/testing';

describe('kiwi-searchbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kiwi-searchbar></kiwi-searchbar>');

    const element = await page.find('kiwi-searchbar');
    expect(element).toHaveClass('hydrated');
  });
});
