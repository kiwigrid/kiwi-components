import { newSpecPage } from '@stencil/core/testing';
import { KiwiRibbon } from './kiwi-ribbon';

describe('kiwi-ribbon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KiwiRibbon],
      html: `<kiwi-ribbon></kiwi-ribbon>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
