import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import {
  dispose,
  init,
} from '../../kiwi-navigation-shell/kiwi-navigation-shell.store';
import { KiwiShellLink } from '../kiwi-shell-link';

describe('kiwi-shell-link', () => {
  let handler: jest.Mock;

  beforeEach(() => {
    handler = jest.fn(() => []);

    init(
      [
        {
          routeKey: 'route-66',
          label: 'Route 66',
          url: () => '/route/66',
          handler: (data) => {
            return handler(data);
          },
        },
        {
          routeKey: 'dynamic-label',
          label: ({ userId }) => `User ${userId}`,
          url: ({ userId }) => `/users/${userId}`,
          handler: (data) => {
            return handler(data);
          },
        },
        {
          routeKey: 'greeting-resolver',
          label: ({ greeting }) => `${greeting}`,
          url: ({ name }) => `/greet/${name}`,
          resolver: ({ name }) =>
            Promise.resolve({ greeting: `Hello ${name}` }),
          handler: (data) => {
            return handler(data);
          },
        },
      ],
      [],
      'route-66',
    );
  });

  afterEach(() => {
    dispose();
  });

  it('renders', async () => {
    const link = await newSpecPage({
      components: [KiwiShellLink],
      template: () => <kiwi-shell-link routeKey="route-66"></kiwi-shell-link>,
    });

    expect(link.root).toMatchSnapshot();
  });

  it('renders label only', async () => {
    const link = await newSpecPage({
      components: [KiwiShellLink],
      template: () => (
        <kiwi-shell-link routeKey="route-66" labelOnly></kiwi-shell-link>
      ),
    });

    expect(link.root).toMatchSnapshot();
  });

  it('renders custom label', async () => {
    const link = await newSpecPage({
      components: [KiwiShellLink],
      template: () => (
        <kiwi-shell-link routeKey="route-66">
          <span class="my-icon" slot="kiwi-shell-link-content"></span>
        </kiwi-shell-link>
      ),
    });

    expect(link.root).toMatchSnapshot();
  });

  it('renders dynamic label', async () => {
    const link = await newSpecPage({
      components: [KiwiShellLink],
      template: () => (
        <kiwi-shell-link
          routeKey="dynamic-label"
          routeData={{ userId: 'johndoe-42' }}
        ></kiwi-shell-link>
      ),
    });

    expect(link.root).toMatchSnapshot();
  });

  it('renders dynamic label with async data', async () => {
    const link = await newSpecPage({
      components: [KiwiShellLink],
      template: () => (
        <kiwi-shell-link
          routeKey="dynamic-label"
          routeData={Promise.resolve({ userId: 'johndoe-42' })}
        ></kiwi-shell-link>
      ),
    });

    expect(link.root).toMatchSnapshot();
  });

  it('renders using data from resolver', async () => {
    const link = await newSpecPage({
      components: [KiwiShellLink],
      template: () => (
        <kiwi-shell-link
          routeKey="greeting-resolver"
          routeData={{ name: 'World' }}
        ></kiwi-shell-link>
      ),
    });

    expect(link.root).toMatchSnapshot();
  });

  it('calls handler', async () => {
    const link = await newSpecPage({
      components: [KiwiShellLink],
      template: () => (
        <kiwi-shell-link routeKey="route-66" routeData={{ route: 66 }}>
          <span class="my-icon" slot="kiwi-shell-link-content"></span>
        </kiwi-shell-link>
      ),
    });

    link.root?.querySelector('a')?.click();

    expect(handler).toBeCalledWith({ route: 66 });
  });
});
