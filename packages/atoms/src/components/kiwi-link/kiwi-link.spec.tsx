import { newSpecPage } from '@stencil/core/testing';
import { KiwiLink } from './kiwi-link';

describe('kiwi-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KiwiLink],
      html: `<kiwi-link to="https://google.com">Google</kiwi-link>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
