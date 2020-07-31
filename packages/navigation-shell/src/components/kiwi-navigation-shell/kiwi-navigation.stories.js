import { html } from 'lit-html';
import readme from './readme.md';
import { forceReRender } from '@storybook/web-components';

export default {
  title: 'Navigation Shell',
  parameters: {
    notes: { markdown: readme },
  },
};

let content = () => html`<p>root</p>`;

const routes = [
  {
    routeKey: 'devices',
    label: 'Devices',
    urlFactory: () => `/devices`,
    handler: () => {
      console.log('navigating to devices');
      content = () => html`
        <p>Devices:
          <ul>
            <li>
              <kiwi-link
                route-key="deviceDetails"
                .routeData="${{ guid: '1234' }}"
              >
                Device 1234
              </kiwi-link>
            </li>
            <li>
              <kiwi-link
                route-key="deviceDetails"
                .routeData="${{ guid: '5678' }}"
              >
                Device 5678
              </kiwi-link>
            </li>
          </ul>
        </p>
      `;
      forceReRender();
      return [];
    },
  },
  {
    routeKey: 'deviceDetails',
    urlFactory: ({ guid }) => `/devices/${guid}`,
    label: ({ guid }) => guid,
    handler: ({ guid }) => {
      console.log('navigating to deviceDetails', guid);
      content = () => html`<p>Device: ${guid}</p>`;
      forceReRender();
      return [{ label: 'Devices', to: { key: 'devices' } }];
    },
  },
  {
    routeKey: 'customers',
    label: 'Customers',
    urlFactory: () => `/customers`,
    handler: () => {
      console.log('navigating to customers');
      content = () => html`
        <p>Customers:
          <ul>
            <li>
              <kiwi-link
                route-key="customerDetails"
                .routeData="${{ userId: '1234' }}"
              >
                Owner 1234
              </kiwi-link>
            </li>
            <li>
              <kiwi-link
                route-key="customerDetails"
                .routeData="${{ userId: '5678' }}"
              >
                Owner 5678
              </kiwi-link>
            </li>
          </ul>
        </p>
      `;
      forceReRender();
      return [];
    },
  },
  {
    routeKey: 'customerDetails',
    label: ({ userId }) => userId,
    urlFactory: ({ userId }) => `/customers/${userId}`,
    handler: ({ userId }) => {
      console.log('navigating to apps');
      content = () => html`<p>Customer: ${userId}</p>`;
      forceReRender();
      return [{ label: 'Customers', to: { key: 'customers' } }];
    },
  },
  {
    routeKey: 'apps',
    label: 'Apps',
    urlFactory: () => `/apps`,
    handler: () => {
      console.log('navigating to apps');
      content = () => html`<p>Apps</p>`;
      forceReRender();
      return [];
    },
  },
];
export const Default = () => {
  return html`<kiwi-navigation-shell .routes="${routes}">
    <div slot="heading"><h2>Navigation Shell</h2></div>
    <div slot="outlet" class="panel panel-default">
      <div class="row">
        <div class="panel-body">
          <div class="col-xs-12">
            <kiwi-link route-key="devices">Devices</kiwi-link>
            <kiwi-link route-key="customers">Customers</kiwi-link>
            <kiwi-link route-key="apps">Apps</kiwi-link>
          </div>
          <div class="col-xs-12">${content()}</div>
        </div>
      </div>
    </div>
  </kiwi-navigation-shell>`;
};
