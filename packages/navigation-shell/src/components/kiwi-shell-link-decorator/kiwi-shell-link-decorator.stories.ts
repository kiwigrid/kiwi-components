import { html, TemplateResult } from 'lit-html';
import readme from './readme.md';

export default {
  title: 'Shell Link Decorator',
  component: 'kiwi-shell-link-decorator',
  parameters: {
    docs: { description: { component: readme } },
  },
};

const Template: Story<{
  children: TemplateResult;
}> = ({ children }) => {
  return html` <kiwi-navigation-shell
    .routes="${[
      {
        routeKey: 'home',
        label: 'Home',
        url: '/home',
        handler: () => {
          console.log('navigate to home');

          return [];
        },
      },
      {
        routeKey: 'products',
        label: ({ amount }: Record<string, string>) => `${amount} Products`,
        url: '/products',
        resolver: () => Promise.resolve({ amount: '10' }),
        handler: () => {
          console.log('navigate to products');

          return [];
        },
      },
      {
        routeKey: 'contact',
        label: () => 'Contact',
        url: '/contact',
        handler: () => {
          console.log('navigate to contact');

          return [];
        },
      },
    ]}"
    active-route="home"
  >
    <div class="panel panel-default">
      <div class="panel-body">
        <kiwi-shell-link-decorator>${children}</kiwi-shell-link-decorator>
      </div>
    </div>
  </kiwi-navigation-shell>`;
};

export const NavPills: typeof Template = Template.bind({});
NavPills.args = {
  children: html`
    <ul class="nav nav-pills">
      <li data-shell-active="home"><a data-shell-route="home">Home</a></li>
      <li data-shell-active="products">
        <a data-shell-route="products">Products</a>
      </li>
      <li data-shell-active="contact">
        <a data-shell-route="contact">Contact</a>
      </li>
    </ul>
  `,
};
