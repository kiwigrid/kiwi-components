import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/Loading',
  parameters: { docs: { description: { component: notes } } },
  decorators: [],
};

export const basic = (args) => {
  const { loading, text } = args;

  return html` <div class="panel panel-default">
    <div class="panel-body">
      <kiwi-loading loading=${loading} text=${text} />
    </div>
  </div>`;
};
basic.args = {
  loading: true,
  text: 'Loading...',
};
