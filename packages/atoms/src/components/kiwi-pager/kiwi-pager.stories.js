import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/Pager',
  parameters: { docs: { description: { component: notes } } },
  decorators: [],
};

export const basic = (args) => {
  const { debounce, total, ofLabel } = args;

  return html` <div class="panel panel-default">
    <div class="panel-body">
      <kiwi-pager
        debounce=${debounce}
        page="0"
        total=${total}
        of-label=${ofLabel}
      />
    </div>
  </div>`;
};
basic.args = {
  debounce: 400,
  total: 5,
  ofLabel: 'of',
};
