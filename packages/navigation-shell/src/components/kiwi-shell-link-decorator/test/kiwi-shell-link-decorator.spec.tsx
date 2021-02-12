import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { init } from '../../kiwi-navigation-shell/kiwi-navigation-shell.store';
import { KiwiShellLinkDecorator } from '../kiwi-shell-link-decorator';

describe('kiwi-shell-link-decorator', () => {
  let handler: jest.Mock;

  beforeAll(async () => {
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
      ],
      [],
      'route-66',
    );
  });

  beforeEach(() => {
    handler = jest.fn(() => []);
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [KiwiShellLinkDecorator],
      template: () => (
        <kiwi-shell-link-decorator
          routeData={{ 'dynamic-label': { userId: 'foo' } }}
        >
          <ul class="nav nav-pills">
            <li data-shell-active="route-66">
              <a data-shell-route="route-66">Home</a>
            </li>
            <li data-shell-active="dynamic-label">
              <a data-shell-route="dynamic-label">Products</a>
            </li>
          </ul>
        </kiwi-shell-link-decorator>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });
});
