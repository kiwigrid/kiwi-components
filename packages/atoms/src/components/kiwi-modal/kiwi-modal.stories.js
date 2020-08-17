import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/Modal',
  parameters: { notes },
  decorators: [withKnobs],
};

export const basic = () => {
  return html`<div class="panel panel-default m-1">
      <div class="panel-body">
        <button
          class="btn btn-default"
          @click=${() =>
            document.dispatchEvent(
              new CustomEvent('showKiwiModal', { detail: 'modalId' }),
            )}
        >
          Show Modal
        </button>
      </div>
    </div>
    <kiwi-modal
      id="modalId"
      with-header="true"
      with-footer="true"
      cancel-text="Cancel"
      ok-text="Ok"
      escape="true"
    >
      <i slot="modal-title">Italic Modal Header</i>
      <div slot="modal-body">Press Escape to close the modal</div>
    </kiwi-modal>`;
};
