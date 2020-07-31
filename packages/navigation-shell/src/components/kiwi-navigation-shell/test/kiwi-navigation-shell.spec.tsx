import { newSpecPage } from '@stencil/core/testing';
import { KiwiNavigationShell } from '../kiwi-navigation-shell';

describe('kiwi-navigation-shell', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KiwiNavigationShell],
      html: `<kiwi-navigation-shell></kiwi-navigation-shell>`,
    });
    expect(page.root).toEqualHtml(`
      <kiwi-navigation-shell>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kiwi-navigation-shell>
    `);
  });
});
