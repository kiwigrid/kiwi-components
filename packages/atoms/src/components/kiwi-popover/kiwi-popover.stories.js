import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/Popover',
  parameters: { docs: { description: { component: notes } } },
  decorators: [],
};

export const basic = (args) => {
  const {
    showTitle,
    placement,
    minWidth,
    maxWidth,
    popoverContent,
    popoverTitle,
  } = args;

  return html`<div class="panel panel-default m-1">
    <div class="panel-body">
      <kiwi-popover
        show-title="${showTitle}"
        placement="${placement}"
        min-width="${minWidth}px"
        max-width="${maxWidth}px"
      >
        <div slot="popover-ref">
          <i class="glyphicon glyphicon-info-sign"></i>
        </div>
        ${showTitle
          ? html`<span slot="popover-title">${popoverTitle}</span>`
          : ''}
        <span slot="popover-content"> ${popoverContent} </span>
      </kiwi-popover>
    </div>
  </div>`;
};
basic.args = {
  showTitle: true,

  minWidth: 150,
  maxWidth: 300,
  popoverContent: 'I am the Popover text!',
  popoverTitle: 'Popover Title',
};
basic.argTypes = {
  placement: {
    control: {
      type: 'select',
      options: [
        'auto',
        'bottom',
        'right',
        'left',
        'auto-start',
        'auto-end',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'right-start',
        'right-end',
        'left-start',
        'left-end',
      ],
    },
    defaultValue: 'bottom',
  },
};
