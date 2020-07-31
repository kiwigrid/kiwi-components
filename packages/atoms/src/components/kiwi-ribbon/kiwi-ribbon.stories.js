import { withKnobs, text, select } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/Ribbon',
  parameters: { notes },
  decorators: [withKnobs],
};

export const basic = () => {
  const backgroundColor = select(
    'backgroundColor',
    [
      'gray',
      'default',
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'danger',
    ],
    'primary',
  );
  const textColor = select(
    'textColor',
    [
      'default',
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'black',
      'paper',
      'gray',
      'charcoal',
    ],
    'default',
  );
  const ribbonText = text('text', 'Mockup');

  return html`<div class="panel panel-default m-1">
    <div class="panel-body" style="height: 150px;">
      <kiwi-ribbon
        text="${ribbonText}"
        background-color="${backgroundColor}"
        text-color="${textColor}"
      />
    </div>
  </div>`;
};
