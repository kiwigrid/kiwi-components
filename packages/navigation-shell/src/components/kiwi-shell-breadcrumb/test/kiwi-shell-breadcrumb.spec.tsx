import { newSpecPage } from '@stencil/core/testing';
import state, {
  dispose,
  init,
  makeLink,
} from '../../kiwi-navigation-shell/kiwi-navigation-shell.store';
import { KiwiShellBreadcrumb } from '../kiwi-shell-breadcrumb';

describe('kiwi-shell-breadcrumb', () => {
  const initialBreadcrumb = [
    { label: 'white' },
    { label: 'rabbits' },
    { label: 'burrow' },
  ];

  beforeEach(() => {
    dispose();

    init(
      [
        {
          routeKey: 'rabbit-hole',
          label: 'rabbit-hole',
          url: '/deep/down/the/rabbit-hole',
          handler: () => [
            { label: 'deep' },
            { label: 'down' },
            { label: 'the' },
          ],
        },
      ],
      initialBreadcrumb,
      'rabbit-hole',
    );
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
      { label: 'deep' },
      { label: 'down' },
      { label: 'the' },
      { label: 'rabbit-hole' },
    ]);

    expect(crumb.root).toMatchSnapshot();
  });
});
