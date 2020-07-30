import { withKnobs, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/Link',
  parameters: { notes },
  decorators: [withKnobs],
};

export const basic = () => {
  const to = text('to', 'https://www.kiwigrid.com');
  const label = text('label', 'Click Me!');

  return html` <div class="panel panel-default">
    <div class="panel-body">
      <kiwi-link to="${to}">${label}</kiwi-link>
    </div>
  </div>`;
};
