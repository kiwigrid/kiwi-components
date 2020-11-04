import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/Sidebar',
  parameters: { docs: { description: { component: notes } } },
  decorators: [],
};

export const basic = (args) => {
  const { visible, position } = args;

  return html`
    <div class="panel panel-default">
      <div class="panel-body">This is outside of the sidebar</div>
    </div>
    <kiwi-sidebar visible=${visible} position=${position}>
      <div class="panel panel-default">
        <div class="panel-body">This is inside of the sidebar</div>
      </div>
    </kiwi-sidebar>
  `;
};
basic.args = {
  visible: true,
};
basic.argTypes = {
  position: {
    control: {
      type: 'select',
      options: ['left', 'right'],
    },
    defaultValue: 'right',
  },
};
