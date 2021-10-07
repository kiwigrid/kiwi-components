import {
  Component,
  Host,
  Event,
  EventEmitter,
  h,
  JSX,
  Prop,
  Fragment,
} from '@stencil/core';

/**
 * @slot kiwi-modal-footer-cancel - The content for the default cancel button.
 * @slot kiwi-modal-footer-confirm - The content for the default confirm button.
 */
@Component({
  tag: 'kiwi-modal-footer',
  shadow: false,
})
export class KiwiModalFooter {
  /**
   * The labels to be used for the default footer buttons, passed as a tuple of
   * strings with the first entry being the confirm label, and the second being
   * the cancel label.
   */
  @Prop()
  defaultLabels: [confirm: string, cancel: string] = ['Ok', 'Cancel'];

  /**
   * Whether to render the default footer buttons or a slot.
   *
   * This is a workaround since slot fallback content is not rendered correctly
   * with `shadow: false`
   */
  @Prop()
  useDefault = true;

  /** The event emitted when the user clicks the default cancel button. */
  @Event()
  cancel!: EventEmitter;

  /** The event emitted when the user clicks the default confirm button. */
  @Event()
  confirm!: EventEmitter;

  render(): JSX.Element {
    const [confirmLabel, cancelLabel] = this.defaultLabels;

    return (
      <Host slot="kiwi-modal-footer">
        <div class="modal-footer">
          {this.useDefault ? (
            <Fragment>
              <button class="btn btn-link" onClick={this.handleClose}>
                <slot name="kiwi-modal-footer-cancel">{cancelLabel}</slot>
              </button>
              <button class="btn btn-primary" onClick={this.handleConfirmation}>
                <slot name="kiwi-modal-footer-confirm">{confirmLabel}</slot>
              </button>
            </Fragment>
          ) : (
            <slot></slot>
          )}
        </div>
      </Host>
    );
  }

  private handleClose = (): void => {
    this.cancel.emit();
  };

  private handleConfirmation = (): void => {
    this.confirm.emit();
  };
}
