import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/Skeleton',
  parameters: { docs: { description: { component: notes } } },
  decorators: [],
};

export const paragraph = (args) => {
  const { rows } = args;

  return html`
    <div class="panel panel-default">
      <div class="panel-body">
        <kiwi-skeleton type="paragraph" rows=${rows}>
      </div>
    </div>
  `;
};

export const table = (args) => {
  const { rows } = args;

  return html`
    <div class="panel panel-default">
      <div class="panel-body">
        <kiwi-skeleton type="table" rows=${rows}>
      </div>
    </div>
  `;
};

paragraph.args = table.args = {
  rows: 4,
};
