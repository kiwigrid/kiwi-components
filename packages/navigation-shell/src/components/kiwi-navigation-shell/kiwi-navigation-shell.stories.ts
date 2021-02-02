import { forceReRender } from '@storybook/web-components';
import { html, TemplateResult } from 'lit-html';
import { RouteConfig } from './kiwi-navigation-shell.store';

export default {
  title: 'Navigation Shell',
};

const Layout: Story<{ children: TemplateResult }> = ({ children }) => html`
  <div class="panel panel-default">
    <div class="panel-body">
      <kiwi-shell-link
        route-key="root.devices"
        custom-class="btn btn-default"
        active-class="btn-primary"
      ></kiwi-shell-link>
      <kiwi-shell-link
        route-key="root.customers"
        custom-class="btn btn-default"
        active-class="btn-primary"
      ></kiwi-shell-link>
      <kiwi-shell-link
        route-key="root.apps"
        custom-class="btn btn-default"
        active-class="btn-primary"
      ></kiwi-shell-link>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-body">${children}</div>
  </div>
`;

const Root = Layout.bind({}, { children: html`<h2>Root</h2>` });

const Customers = Layout.bind(
  {},
  {
    children: html`
  <p>Customers:
    <ul>
      <li>
        <kiwi-shell-link
          route-key="root.customers.customerDetails"
          .routeData="${{ userId: '1234' }}"
        >
        </kiwi-shell-link>
      </li>
      <li>
        <kiwi-shell-link
          route-key="root.customers.customerDetails"
          .routeData="${{ userId: '5678' }}"
        >
        </kiwi-shell-link>
      </li>
    </ul>
  </p>
`,
  },
);

const Devices = Layout.bind(
  {},
  {
    children: html`
  <p>Devices:
    <ul>
      <li>
        <kiwi-shell-link
          route-key="root.devices.deviceDetails"
          .routeData="${{ guid: '1234' }}"
        >
        </kiwi-shell-link>
      </li>
      <li>
        <kiwi-shell-link
          route-key="root.devices.deviceDetails"
          .routeData="${{ guid: '5678' }}"
        >
        </kiwi-shell-link>
      </li>
    </ul>
  </p>
`,
  },
);

const routes = [
  {
    routeKey: 'root',
    label: 'Root',
    url: '/root',
    handler: () => {
      navigateTo(Root);

      return [];
    },
  },
  {
    routeKey: 'root.devices',
    label: 'Devices',
    url: () => `/devices`,
    handler: () => {
      navigateTo(Devices);

      return [{ to: { key: 'root' } }];
    },
  },
  {
    routeKey: 'root.devices.deviceDetails',
    url: ({ guid }) => `/devices/${guid}`,
    label: ({ guid }) => guid,
    handler: ({ guid }) => {
      navigateTo(() => html`<p>Device: ${guid}</p>`);

      return [
        { to: { key: 'root' } },
        { label: 'Devices', to: { key: 'root.devices' } },
      ];
    },
  } as RouteConfig<{ guid: string }>,
  {
    routeKey: 'root.customers',
    label: 'Customers',
    url: () => `/customers`,
    handler: () => {
      navigateTo(Customers);

      return [{ to: { key: 'root' } }];
    },
  },
  {
    routeKey: 'root.customers.customerDetails',
    label: ({ userId }) => userId,
    url: ({ userId }) => `/customers/${userId}`,
    handler: ({ userId }) => {
      navigateTo(() => html`<p>Customer: ${userId}</p>`);

      return [
        { to: { key: 'root' } },
        { label: 'Customers', to: { key: 'root.customers' } },
      ];
    },
  } as RouteConfig<{ userId: string }>,
  {
    routeKey: 'root.apps',
    label: 'Apps',
    url: () => `/apps`,
    handler: () => {
      navigateTo(Layout.bind({}, { children: html`<p>Apps</p>` }));

      return [{ to: { key: 'root' } }];
    },
  },
];

let content = Root;

const navigateTo = (component: () => TemplateResult): void => {
  content = component;
  forceReRender();
};

const Template = (): TemplateResult => {
  return html`<kiwi-navigation-shell
    .routes="${routes}"
    .breadcrumb="${[{ label: 'Root' }]}"
    active-route="root"
  >
    <div class="panel panel-default">
      <div class="panel-heading"><h2>Navigation Shell</h2></div>
      <div class="panel-body">
        <kiwi-shell-breadcrumb></kiwi-shell-breadcrumb>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-body">${content()}</div>
    </div>
  </kiwi-navigation-shell>`;
};

export const Basic = Template.bind({});
