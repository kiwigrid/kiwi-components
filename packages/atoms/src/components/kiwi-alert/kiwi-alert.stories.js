import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/Alert',
  parameters: { docs: { description: { component: notes } } },
  decorators: [],
};

export const basic = (args) => {
  const { type, text } = args;

  return html` <kiwi-alert type=${type}>${text}</kiwi-alert>`;
};
basic.args = {
  text: 'This is an alert',
};
basic.argTypes = {
  type: {
    control: {
      type: 'select',
      options: ['info', 'warn', 'error', 'success'],
    },
    defaultValue: 'info',
  },
};
