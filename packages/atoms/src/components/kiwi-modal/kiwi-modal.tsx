import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Listen,
  Prop,
} from '@stencil/core';

export type Size = 'small' | 'medium' | 'large';
const sizeClasses: { [Key in Size]: string } = {
  small: 'modal-sm',
  medium: '',
  large: 'modal-lg',
};

@Component({
  tag: 'kiwi-modal',
  styleUrl: 'kiwi-modal.css',
  shadow: false,
})
export class KiwiModal {
  /** Set this to true to show the modal or alternatively set an id to this element and dispatch a 'showKiwiModal' CustomEvent with the id as event.detail */
  @Prop({
    mutable: true,
    reflect: true,
  })
  open?: boolean = false;

  /** Set this to true if you want to show the header */
  @Prop()
  withHeader?: boolean = false;

  /** Set this to true if you want to show the footer */
  @Prop()
  withFooter?: boolean = false;

  /** Set this text to show the cancel button, remember to set "withFooter" to show the cancel button */
  @Prop()
  cancelText?: string;

  /** Sets the text of the ok button, remember to set "withFooter" to show the ok button */
  @Prop()
  okText?: string = 'Ok';

  /** Set to true if the modal should be closed on Escape press */
  @Prop()
  escape?: boolean = false;

  /** Set the size of the modal */
  @Prop()
  size: Size = 'medium';

  @Element() host!: HTMLElement;

  @Event()
  closed!: EventEmitter;
  @Event()
  confirmed!: EventEmitter;

  componentDidLoad() {
    if (this.escape) {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.handleClose(e);
        }
      });
    }
  }

  render() {
    return (
      <div class={{ modal: true, show: this.open ?? false }}>
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
                  <slot name="modal-title"></slot>
                </h4>
              </div>
            )}
            <div class="modal-body">
              <slot name="modal-body"></slot>
            </div>
            {this.withFooter && (
              <div class="modal-footer">
                {this.cancelText && (
                  <button class="btn btn-link" onClick={this.handleClose}>
                    {this.cancelText}
                  </button>
                )}
                <button
                  class="btn btn-primary"
                  onClick={this.handleConfirmation}
                >
                  {this.okText}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  @Listen('showKiwiModal', { target: 'document' })
  private showKiwiModalHandler(event: CustomEvent<string>): void {
    if (event.detail === this.host.id) {
      this.open = true;
    }
  }

  private handleClose = (event: Event): void => {
    this.open = false;
    this.closed.emit();
  };

  private handleConfirmation = (event: Event): void => {
    this.confirmed.emit();
    this.handleClose(event);
  };
}
