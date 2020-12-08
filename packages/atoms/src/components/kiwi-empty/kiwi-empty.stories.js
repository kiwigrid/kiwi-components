import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/Empty',
  parameters: { docs: { description: { component: notes } } },
  decorators: [],
};

export const withContent = (args) => {
  const { content, glyphicon, size } = args;

  return html` <div class="panel panel-default">
    <div class="panel-body">
      <kiwi-empty with-content="true" size="${size}" glyphicon="${glyphicon}">
        ${content}
      </kiwi-empty>
    </div>
  </div>`;
};

export const withoutContent = (args) => {
  const { glyphicon, size } = args;

  return html` <div class="panel panel-default">
    <div class="panel-body">
      <kiwi-empty with-content="false" size="${size}" glyphicon="${glyphicon}">
      </kiwi-empty>
    </div>
  </div>`;
};
withoutContent.args = withContent.args = {
  glyphicon: 'refresh',
};
withContent.args = { ...withContent.args, content: 'Connecting...' };
withContent.argTypes = withoutContent.argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
    defaultValue: 'medium',
  },
};
