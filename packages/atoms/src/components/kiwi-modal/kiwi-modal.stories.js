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

export const scrolling = () => {
  return html`<div class="panel panel-default m-1">
      <div class="panel-body">
        <button class="btn btn-default" @click=${openModal}>Show Modal</button>
        <p style="width: 100px">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
          esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
          at vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Nam liber tempor cum soluta nobis eleifend option congue nihil
          imperdiet doming id quod mazim placerat facer possim assum. Lorem
          ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
          vel eum iriure dolor in hendrerit in vulputate velit esse molestie
          consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos
          erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea
          et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero
          voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur
        </p>
      </div>
    </div>
    <kiwi-modal with-header escape>
      <div slot="modal-body">
        This is a very long text to show and test scrolling behaviour. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in
        hendrerit in vulputate velit esse molestie consequat, vel illum dolore
        eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
        dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
        te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer
        adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
        dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
        nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
        ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
        vulputate velit esse molestie consequat, vel illum dolore eu feugiat
        nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
        blandit praesent luptatum zzril delenit augue duis dolore te feugait
        nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue
        nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem
        ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
        wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
        suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
        vel eum iriure dolor in hendrerit in vulputate velit esse molestie
        consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
        sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam
        diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et
        invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum.
        sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur
      </div>
    </kiwi-modal>`;
};
