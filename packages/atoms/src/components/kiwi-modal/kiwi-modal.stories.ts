import { html, TemplateResult } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/Modal',
  parameters: { docs: { description: { component: notes } } },
  decorators: [],
};

const toggleModal = (open: boolean) => (): void => {
  const modal = document.querySelector('kiwi-modal');

  if (!modal) {
    return;
  }

  modal.open = open;
};

const openModal = toggleModal(true);
const closeModal = toggleModal(false);

export const basic = (): TemplateResult => {
  return html`<div class="panel panel-default m-1">
      <div class="panel-body">
        <button class="btn btn-default" @click=${openModal}>Show Modal</button>
      </div>
    </div>
    <kiwi-modal>
      <div slot="kiwi-modal-body">
        There is just this text and nothing else. Close me by clicking outside.
      </div>
    </kiwi-modal>`;
};

export const fullWithDefaultFooter = (): TemplateResult => {
  return html`<div class="panel panel-default m-1">
      <div class="panel-body">
        <button class="btn btn-default" @click=${openModal}>Show Modal</button>
      </div>
    </div>

    <kiwi-modal with-header escape>
      <i slot="kiwi-modal-title">Italic Modal Header</i>

      <div slot="kiwi-modal-body">Press Escape to close the modal</div>

      <kiwi-modal-footer
        slot="kiwi-modal-footer"
        @cancel=${closeModal}
        @confirm=${closeModal}
      ></kiwi-modal-footer>
    </kiwi-modal>`;
};

export const fullWithCustomFooterLabels = (): TemplateResult => {
  return html`<div class="panel panel-default m-1">
      <div class="panel-body">
        <button class="btn btn-default" @click=${openModal}>Show Modal</button>
      </div>
    </div>

    <kiwi-modal with-header escape>
      <i slot="kiwi-modal-title">Italic Modal Header</i>

      <div slot="kiwi-modal-body">Press Escape to close the modal</div>

      <kiwi-modal-footer
        .defaultLabels=${['Confirm', 'Abort']}
        @cancel=${closeModal}
        @confirm=${closeModal}
        slot="kiwi-modal-footer"
      ></kiwi-modal-footer>
    </kiwi-modal>`;
};

export const fullWithCustomFooterButtonContents = (): TemplateResult => {
  return html`<div class="panel panel-default m-1">
      <div class="panel-body">
        <button class="btn btn-default" @click=${openModal}>Show Modal</button>
      </div>
    </div>

    <kiwi-modal with-header escape>
      <i slot="kiwi-modal-title">Italic Modal Header</i>

      <div slot="kiwi-modal-body">Press Escape to close the modal</div>

      <kiwi-modal-footer
        slot="kiwi-modal-footer"
        @cancel=${closeModal}
        @confirm=${closeModal}
      >
        <span slot="kiwi-modal-footer-confirm">
          <span class="glyphicon glyphicon-ok mr-1"></span>
          Okay
        </span>

        <span slot="kiwi-modal-footer-cancel">
          <span class="glyphicon glyphicon-remove mr-1"></span>
          Abbrechen
        </span>
      </kiwi-modal-footer>
    </kiwi-modal>`;
};

export const fullWithCustomFooter = (): TemplateResult => {
  return html`<div class="panel panel-default m-1">
      <div class="panel-body">
        <button class="btn btn-default" @click=${openModal}>Show Modal</button>
      </div>
    </div>

    <kiwi-modal with-header escape>
      <i slot="kiwi-modal-title">Italic Modal Header</i>

      <div slot="kiwi-modal-body">Press Escape to close the modal</div>

      <kiwi-modal-footer .useDefault=${false} slot="kiwi-modal-footer">
        <button class="btn btn-danger" @click=${closeModal}>Delete</button>
      </kiwi-modal-footer>
    </kiwi-modal>`;
};

export const scrolling = (): TemplateResult => {
  return html`<div class="panel panel-default m-1">
      <div class="panel-body">
        <button class="btn btn-default" @click=${openModal}>Show Modal</button>

        <hr />

        <h2>This is long content</h2>

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

    <kiwi-modal escape>
      <div slot="kiwi-modal-body">
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
