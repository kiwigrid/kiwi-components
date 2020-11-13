import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/Searchbar',
  parameters: { docs: { description: { component: notes } } },
  decorators: [],
};

export const basic = (args) => {
  const { debounce, placeholder } = args;

  return html` <div class="panel panel-default">
    <div class="panel-body">
      <kiwi-searchbar debounce=${debounce} placeholder=${placeholder} />
    </div>
  </div>`;
};
basic.args = {
  debounce: 400,
  placeholder: 'Search...',
};
