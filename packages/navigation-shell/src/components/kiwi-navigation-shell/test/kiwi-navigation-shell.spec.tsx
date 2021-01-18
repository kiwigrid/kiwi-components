import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { KiwiNavigationShell } from '../kiwi-navigation-shell';
import state, { getRoute, hasRoute } from '../kiwi-navigation-shell.store';

describe('kiwi-navigation-shell', () => {
  it('renders children', async () => {
    const shell = await newSpecPage({
      components: [KiwiNavigationShell],
      template: () => (
        <kiwi-navigation-shell routes={[]}>
          <div>My App</div>
        </kiwi-navigation-shell>
      ),
    });

    expect(shell.root).toMatchSnapshot();
  });

  it('inits store', async () => {
    const breadcrumb = [{ label: 'Initial', to: { key: 'key' } }];
    const routes = [
      {
        routeKey: 'key',
        label: 'label',
        url: 'url',
        handler: jest.fn(),
      },
    ];

    await newSpecPage({
      components: [KiwiNavigationShell],
      template: () => (
        <kiwi-navigation-shell
          routes={routes}
          breadcrumb={breadcrumb}
        ></kiwi-navigation-shell>
      ),
    });

    expect(state.breadcrumb).toEqual(breadcrumb);
    expect(hasRoute('key')).toBe(true);
    expect(getRoute('key')?.label).toEqual('label');
  });
});
