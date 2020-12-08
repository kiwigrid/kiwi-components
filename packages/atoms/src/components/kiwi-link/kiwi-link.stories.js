import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/Link',
  parameters: { docs: { description: { component: notes } } },
  decorators: [],
};

export const basic = (args) => {
  const { to, label } = args;

  return html` <div class="panel panel-default">
    <div class="panel-body">
      <kiwi-link to="${to}">${label}</kiwi-link>
    </div>
  </div>`;
};
basic.args = {
  to: 'https://www.kiwigrid.com',
  label: 'Click Me!',
};
