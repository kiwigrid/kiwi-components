import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/Modal',
  parameters: { docs: { description: { component: notes } } },
  decorators: [],
};

const openModal = () => (document.querySelector('kiwi-modal').open = true);

export const basic = () => {
  return html`<div class="panel panel-default m-1">
      <div class="panel-body">
        <button class="btn btn-default" @click=${openModal}>Show Modal</button>
      </div>
    </div>
    <kiwi-modal>
      <div slot="modal-body">
        There is just this text and nothing else. Close me by clicking outside.
      </div>
    </kiwi-modal>`;
};

export const full = () => {
  return html`<div class="panel panel-default m-1">
      <div class="panel-body">
        <button class="btn btn-default" @click=${openModal}>Show Modal</button>
      </div>
    </div>
    <kiwi-modal with-header cancel-text="Cancel" ok-text="Ok" escape>
      <i slot="modal-title">Italic Modal Header</i>
      <div slot="modal-body">Press Escape to close the modal</div>
    </kiwi-modal>`;
};

export const stepped = () => {
  const setStep1 = (event) => {
    if (event.target.id === 'steppedModal') {
      event.target.nextText = 'Next';
      event.target.cancelText = 'Cancel';
      event.target.previousText = undefined;
      event.target.okText = undefined;
      event.target.querySelector('[slot="modal-body"]').textContent = 'Step 1';
    }
  };
  const setStep2 = (event) => {
    if (event.target.id === 'steppedModal') {
      event.target.nextText = undefined;
      event.target.cancelText = 'Cancel';
      event.target.previousText = 'Back';
      event.target.okText = 'Finish';
      event.target.querySelector('[slot="modal-body"]').textContent = 'Step 2';
    }
  };
  document.addEventListener('next', setStep2);
  document.addEventListener('previous', setStep1);
  document.addEventListener('closed', setStep1);

  return html`<div class="panel panel-default m-1">
      <div class="panel-body">
        <button class="btn btn-default" @click=${openModal}>
          Show Stepped Modal
        </button>
      </div>
    </div>
    <kiwi-modal
      id="steppedModal"
      with-header="true"
      cancel-text="Cancel"
      next-text="Next"
    >
      <i slot="modal-title">Italic Modal Header</i>
      <div slot="modal-body">Step 1</div>
    </kiwi-modal>`;
};
