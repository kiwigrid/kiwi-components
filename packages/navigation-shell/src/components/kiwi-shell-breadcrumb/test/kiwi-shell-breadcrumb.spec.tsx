import { newSpecPage } from '@stencil/core/testing';
import { KiwiShellBreadcrumb } from '../kiwi-shell-breadcrumb';

describe('kiwi-shell-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KiwiShellBreadcrumb],
      html: `<kiwi-shell-breadcrumb></kiwi-shell-breadcrumb>`,
    });

    expect(page.root).toBeTruthy();
  });
});
