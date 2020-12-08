import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/Ribbon',
  parameters: { docs: { description: { component: notes } } },
  decorators: [],
};

export const basic = (args) => {
  const { backgroundColor, textColor, ribbonText } = args;

  return html`<div class="panel panel-default m-1">
    <div class="panel-body" style="height: 150px;">
      <kiwi-ribbon
        text="${ribbonText}"
        background-color="${backgroundColor}"
        text-color="${textColor}"
      />
    </div>
  </div>`;
};
basic.args = {
  ribbonText: 'Mockup',
};
basic.argTypes = {
  backgroundColor: {
    control: {
      type: 'select',
      options: [
        'primary',
        'gray',
        'default',
        'secondary',
        'success',
        'info',
        'warning',
        'danger',
      ],
    },
    defaultValue: 'primary',
  },
  textColor: {
    control: {
      type: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'black',
        'paper',
        'gray',
        'charcoal',
      ],
    },
    defaultValue: 'default',
  },
};
