import { newE2EPage } from '@stencil/core/testing';

describe('kiwi-sortable-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kiwi-sortable-label></kiwi-sortable-label>');

    const element = await page.find('kiwi-sortable-label');
    expect(element).toHaveClass('hydrated');
  });
});
