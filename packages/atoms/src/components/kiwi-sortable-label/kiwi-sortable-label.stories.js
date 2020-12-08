import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/SortableLabel',
  parameters: { docs: { description: { component: notes } } },
  decorators: [],
};

export const basic = (args) => {
  const { label, sortDirection } = args;

  return html`
    <div class="panel panel-default">
      <div class="panel-body">
        <kiwi-sortable-label label=${label} sort-direction=${sortDirection} />
      </div>
    </div>
  `;
};
basic.args = {
  label: 'Label',
};
basic.argTypes = {
  sortDirection: {
    control: {
      type: 'select',
      options: ['asc', 'desc', 'off'],
    },
    defaultValue: 'asc',
  },
};
