import { newSpecPage } from '@stencil/core/testing';
import { KiwiShellLink } from '../kiwi-shell-link';

describe('kiwi-shell-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KiwiShellLink],
      html: `<kiwi-shell-link></kiwi-shell-link>`,
    });

    expect(page.root).toBeTruthy();
  });
});
