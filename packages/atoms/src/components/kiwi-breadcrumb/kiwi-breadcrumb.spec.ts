import { newSpecPage } from '@stencil/core/testing';
import { KiwiBreadcrumb } from './kiwi-breadcrumb';

describe('kiwi-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KiwiBreadcrumb],
      html: `<kiwi-breadcrumb></kiwi-breadcrumb>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
