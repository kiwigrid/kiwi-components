import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { KiwiNavigationShell } from '../kiwi-navigation-shell';

describe('kiwi-navigation-shell', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KiwiNavigationShell],
      template: () => (
        <kiwi-navigation-shell routes={[]}></kiwi-navigation-shell>
      ),
    });

    expect(page.root).toBeTruthy();
  });
});
