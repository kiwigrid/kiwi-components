import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  Watch,
} from '@stencil/core';

export type Size = 'small' | 'medium' | 'large';
const sizeClasses: { [Key in Size]: string } = {
  small: 'modal-sm',
  medium: '',
  large: 'modal-lg',
};

/**
 * @slot kiwi-modal-title - The content of the modal title
 * @slot kiwi-modal-body - The content of the modal body
 * @slot kiwi-modal-footer - The content of the modal footer (see [kiwi-modal-footer](../kiwi-modal-footer))
 */
@Component({
  tag: 'kiwi-modal',
  shadow: false,
})
export class KiwiModal {
  /** Set this to true to show the modal or alternatively set an id to this element and dispatch a 'showKiwiModal' CustomEvent with the id as event.detail */
  @Prop({
    mutable: true,
    reflect: true,
  })
  open = false;

  @Watch('open')
  private onOpenChange(open: boolean): void {
    if (open) {
      this.handleOpeningCssClasses();
    } else {
      this.handleClosingCssClasses();
    }
  }

  /** Set this to true if you want to show the header */
  @Prop()
  withHeader = false;

  /** Set to true if the modal should be closed on Escape press */
  @Prop()
  escape = false;

  /** Set the size of the modal */
  @Prop()
  size: Size = 'medium';

  @Element()
  host!: HTMLKiwiModalElement;

  /** This event is emitted after the modal was closed */

  @Event()
  close!: EventEmitter;

  private modalElement!: HTMLDivElement;

  private backdropElement!: HTMLDivElement;

  @Listen('showKiwiModal', { target: 'document' })
  private showKiwiModalHandler(event: CustomEvent<string>): void {
    if (event.detail === this.host.id) {
      this.open = true;
    }
  }

  componentDidLoad(): void {
    if (this.escape) {
      document.addEventListener('keydown', this.handleKeydown);
    }

    this.onOpenChange(this.open);
  }

  disconnectedCallback(): void {
    this.handleClosingCssClasses();
    document.removeEventListener('keydown', this.handleKeydown);
  }

  render(): void {
    return (
      <Host>
        <div
          class="modal"
          onClick={this.handleClickOutside}
          ref={(el) => (this.modalElement = el as HTMLDivElement)}
        >
          <div class={`modal-dialog ${sizeClasses[this.size]}`}>
            <div class="modal-content">
              {this.withHeader && (
                <div class="modal-header modal-default">
                  <button
                    class="close"
                    type="close"
                    aria-hidden="true"
                    onClick={this.handleClose}
                  >
                    ×
                  </button>

                  <h4 class="modal-title">
                    <slot name="kiwi-modal-title"></slot>
                  </h4>
                </div>
              )}
              <div class="modal-body">
                <slot name="kiwi-modal-body"></slot>
              </div>
              <slot name="kiwi-modal-footer"></slot>
            </div>
          </div>
        </div>

        <div
          class="modal-backdrop"
          style={{ display: 'none' }}
          ref={(el) => (this.backdropElement = el as HTMLDivElement)}
        />
      </Host>
    );
  }

  private handleOpeningCssClasses = (): void => {
    document.body.classList.add('modal-open');
    this.modalElement.classList.add('show', 'fade');
    this.backdropElement.classList.add('show', 'fade');
    window.setTimeout(() => {
      this.modalElement.classList.add('in');
      this.backdropElement.classList.add('in');
    }, 150);
  };

  private handleClosingCssClasses = (): void => {
    this.modalElement.classList.remove('in');
    window.setTimeout(() => {
      this.modalElement.classList.remove('show', 'fade');
      this.backdropElement.classList.remove('in');
    }, 250);
    window.setTimeout(() => {
      this.backdropElement.classList.remove('show', 'fade');
      document.body.classList.remove('modal-open');
    }, 500);
  };

  private handleClose = (): void => {
    this.open = false;
    this.close.emit();
  };

  private handleClickOutside = (event: Event): void => {
    if (event.target === this.modalElement) {
      this.handleClose();
    }
  };

  private handleKeydown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      this.handleClose();
    }
  };
}
