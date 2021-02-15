import { newSpecPage } from '@stencil/core/testing';
import state, {
  dispose,
  init,
  makeLink,
  RouteHistory,
} from '../../kiwi-navigation-shell/kiwi-navigation-shell.store';
import { KiwiShellBreadcrumb } from '../kiwi-shell-breadcrumb';

describe('kiwi-shell-breadcrumb', () => {
  const initialBreadcrumb: RouteHistory = [
    { routeKey: 'deep' },
    { routeKey: 'down' },
  ];

  beforeEach(() => {
    init(
      [
        {
          routeKey: 'deep',
          label: 'Deep',
          url: '/deep',
          handler: () => [],
        },
        {
          routeKey: 'down',
          label: 'Down',
          url: '/deep/down',
          handler: () => [{ routeKey: 'deep' }],
        },
        {
          routeKey: 'rabbit-hole',
          label: 'The Rabbit Hole',
          url: '/deep/down/rabbit-hole',
          handler: () => [{ routeKey: 'deep' }, { routeKey: 'down' }],
        },
      ],
      initialBreadcrumb,
      'deep',
    );
  });

  afterEach(() => {
    dispose();
  });

  it('renders initialBreadcrumb', async () => {
    const crumb = await newSpecPage({
      components: [KiwiShellBreadcrumb],
      html: `<kiwi-shell-breadcrumb></kiwi-shell-breadcrumb>`,
    });

    expect(state.breadcrumb).toEqual(initialBreadcrumb);

    expect(crumb.root).toMatchSnapshot();
  });

  it('renders updated breadcrumb', async () => {
    const crumb = await newSpecPage({
      components: [KiwiShellBreadcrumb],
      html: `<kiwi-shell-breadcrumb></kiwi-shell-breadcrumb>`,
    });

    expect(state.breadcrumb).toEqual(initialBreadcrumb);

    const [, , onClick] = await makeLink('rabbit-hole', {});
    onClick(new MouseEvent('click'));

    await crumb.waitForChanges();

    expect(state.breadcrumb).toEqual([
      { routeKey: 'deep' },
      { routeKey: 'down' },
      {
        data: {},
        label: 'The Rabbit Hole',
        labelOnly: true,
        routeKey: 'rabbit-hole',
      },
    ]);

    expect(crumb.root).toMatchSnapshot();
  });
});
