import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/Label',
  parameters: { docs: { description: { component: notes } } },
  decorators: [],
};

export const basic = (args) => {
  const { kind, classes, label } = args;

  return html` <div class="panel panel-default">
    <div class="panel-body">
      <kiwi-label kind=${kind} classes=${classes}>${label}</kiwi-label>
    </div>
  </div>`;
};
basic.args = {
  classes: '',
  label: 'Click Me!',
};
basic.argTypes = {
  kind: {
    control: {
      type: 'select',
      options: ['default', 'info', 'success', 'warning', 'danger'],
    },
    defaultValue: 'default',
  },
};
