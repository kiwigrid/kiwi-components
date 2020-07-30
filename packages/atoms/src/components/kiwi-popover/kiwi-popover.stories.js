import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs';
import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/Popover',
  parameters: { notes },
  decorators: [withKnobs],
};

export const basic = () => {
  const showTitle = boolean('showTitle', true);
  const placement = select(
    'placement',
    [
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
    'bottom',
  );
  const minWidth = number('minWidth', 150);
  const maxWidth = number('maxWidth', 300);
  const popoverContent = text('popoverContent', 'I am the Popover text!');
  const popoverTitle = text('popoverTitle', 'Popover Title');

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
        <span slot="popover-content">
          ${popoverContent}
        </span>
      </kiwi-popover>
    </div>
  </div>`;
};
