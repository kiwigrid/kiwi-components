import { newE2EPage } from '@stencil/core/testing';

describe('kiwi-blueprint', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kiwi-blueprint></kiwi-blueprint>');

    const element = await page.find('kiwi-blueprint');
    expect(element).toHaveClass('hydrated');
  });

  it('should show default message', async () => {
    const page = await newE2EPage();
    await page.setContent('<kiwi-blueprint></kiwi-blueprint>');

    const element = await page.find('kiwi-blueprint');
    expect(element).toMatchSnapshot();
  });

  it('should show message from attribute', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<kiwi-blueprint message="E2E Test!"></kiwi-blueprint>',
    );

    const element = await page.find('kiwi-blueprint');
    expect(element).toMatchSnapshot();
  });
});
