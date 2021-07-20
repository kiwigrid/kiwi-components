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
import { some } from 'lodash-es';

export type Size = 'small' | 'medium' | 'large';
const sizeClasses: { [Key in Size]: string } = {
  small: 'modal-sm',
  medium: '',
  large: 'modal-lg',
};

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

  /** Set this to true if you want to show the header */
  @Prop()
  withHeader = false;

  /** Set this text to show the cancel button */
  @Prop()
  cancelText?: string;

  /** Set this text to show the previous button */
  @Prop()
  previousText?: string;

  /** Set this text to show the next button */
  @Prop()
  nextText?: string;

  /** Set this text to show the ok button */
  @Prop()
  okText?: string;

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
  closed!: EventEmitter;

  /** This event is emitted on click on the "previous" button  */
  @Event()
  previous!: EventEmitter;

  /** This event is emitted on click on the "next" button */
  @Event()
  next!: EventEmitter;

  /** This event is emitted on click on the "ok" button  */
  @Event()
  confirmed!: EventEmitter;

  private modalElement!: HTMLDivElement;

  private backdropElement!: HTMLDivElement;

  @Listen('showKiwiModal', { target: 'document' })
  private showKiwiModalHandler(event: CustomEvent<string>): void {
    if (event.detail === this.host.id) {
      this.open = true;
    }
  }

  @Watch('open')
  private onOpenChange(newValue: boolean): void {
    if (newValue) {
      this.handleOpeningCssClasses();
    } else {
      this.handleClosingCssClasses();
    }
  }

  componentDidLoad(): void {
    if (this.escape) {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.handleClose();
        }
      });
    }

    this.onOpenChange(this.open);
  }

  disconnectedCallback(): void {
    this.handleClosingCssClasses();
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
    this.closed.emit();
  };
  private handlePrevious = (): void => {
    this.previous.emit();
  };
  private handleNext = (): void => {
    this.next.emit();
  };
  private handleConfirmation = (): void => {
    this.confirmed.emit();
    this.handleClose();
  };
  private handleClickOutside = (event: Event): void => {
    if (event.target === this.modalElement) {
      this.handleClose();
    }
  };

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
                    <slot name="modal-title"></slot>
                  </h4>
                </div>
              )}
              <div class="modal-body">
                <slot name="modal-body"></slot>
              </div>
              {some([
                this.cancelText,
                this.previousText,
                this.nextText,
                this.okText,
              ]) && (
                <div class="modal-footer">
                  {this.previousText && (
                    <button
                      class="btn btn-link pull-left"
                      onClick={this.handlePrevious}
                    >
                      {this.previousText}
                    </button>
                  )}
                  {this.cancelText && (
                    <button class="btn btn-link" onClick={this.handleClose}>
                      {this.cancelText}
                    </button>
                  )}
                  {this.nextText && (
                    <button class="btn btn-primary" onClick={this.handleNext}>
                      {this.nextText}
                    </button>
                  )}
                  {this.okText && (
                    <button
                      class="btn btn-primary"
                      onClick={this.handleConfirmation}
                    >
                      {this.okText}
                    </button>
                  )}
                </div>
              )}
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
}
