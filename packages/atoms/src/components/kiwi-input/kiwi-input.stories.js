import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/Input',
  parameters: { docs: { description: { component: notes } } },
  decorators: [],
};

export const basic = (args) => {
  const { name, placeholder, value } = args;

  return html`<div class="panel panel-default">
    <div class="panel-body">
      <kiwi-input
        name=${name}
        placeholder=${placeholder}
        value=${value}
      ></kiwi-input>
    </div>
  </div>`;
};
basic.args = {
  name: 'inputName',
  placeholder: 'Type something here...',
  value: '',
};
