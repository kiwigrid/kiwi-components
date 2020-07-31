import { newSpecPage } from '@stencil/core/testing';
import { KiwiBreadcrumbItem } from './kiwi-breadcrumb-item';

describe('kiwi-breadcrumb-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KiwiBreadcrumbItem],
      html: `<kiwi-breadcrumb-item></kiwi-breadcrumb-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
