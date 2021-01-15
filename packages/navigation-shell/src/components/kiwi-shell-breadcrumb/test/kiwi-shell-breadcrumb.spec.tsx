import { newSpecPage } from '@stencil/core/testing';
import { KiwiShellBreadcrumb } from '../kiwi-shell-breadcrumb';

describe('kiwi-shell-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KiwiShellBreadcrumb],
      html: `<kiwi-shell-breadcrumb></kiwi-shell-breadcrumb>`,
    });
    expect(page.root).toEqualHtml(`
      <kiwi-shell-breadcrumb>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kiwi-shell-breadcrumb>
    `);
  });
});
