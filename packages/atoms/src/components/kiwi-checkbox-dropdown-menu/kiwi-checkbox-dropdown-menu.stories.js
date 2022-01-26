import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/CheckboxDropdownMenu',
  parameters: { docs: { description: { component: notes } } },
  decorators: [],
};

export const basic = (args) => {
  const { buttonText, options } = args;

  return html`<div class="panel panel-default m-1">
    <div class="panel-body">
      <kiwi-checkbox-dropdown-menu>
        <div slot="dropdown-toggle">${buttonText}</div>
        <kiwi-checkbox-menu slot="dropdown-content">
          ${options.map(
            (o) => html`<kiwi-checkbox-menu-item>
              <kiwi-labeled-checkbox> ${o} </kiwi-labeled-checkbox>
            </kiwi-checkbox-menu-item>`,
          )}
        </kiwi-checkbox-menu>
      </kiwi-checkbox-dropdown-menu>
    </div>
  </div>`;
};
basic.args = {
  buttonText: 'Click me',
  options: ['Option 1', 'Option 2', 'Option 3'],
};

export const rightScreenEdge = (args) => {
  const { buttonText, options, menuEntryWidth } = args;

  return html`<div class="panel panel-default m-1">
    <div class="panel-body">
      <kiwi-checkbox-dropdown-menu class="pull-right">
        <div slot="dropdown-toggle">${buttonText}</div>
        <kiwi-checkbox-menu slot="dropdown-content">
          ${options.map(
            (o) => html`<kiwi-checkbox-menu-item>
              <kiwi-labeled-checkbox>
                <div style="min-width:${menuEntryWidth}">
                  ${o}
                </div></kiwi-labeled-checkbox
              >
            </kiwi-checkbox-menu-item>`,
          )}
        </kiwi-checkbox-menu>
      </kiwi-checkbox-dropdown-menu>
    </div>
  </div>`;
};
rightScreenEdge.args = {
  buttonText: 'Click me',
  options: ['Very Long Option 1', 'Very Long Option 2', 'Very Long Option 3'],
  menuEntryWidth: ['120px'],
};
