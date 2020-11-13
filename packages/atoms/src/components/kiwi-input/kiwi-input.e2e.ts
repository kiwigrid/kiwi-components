import { newE2EPage } from '@stencil/core/testing';

describe('kiwi-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kiwi-input></kiwi-input>');

    const element = await page.find('kiwi-input');
    expect(element).toHaveClass('hydrated');
  });
});
