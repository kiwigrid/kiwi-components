import {
  Component,
  ComponentInterface,
  h,
  Host,
  JSX,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'kiwi-alert',
  shadow: false,
})
export class KiwiAlert implements ComponentInterface {
  /**
   * The type of the alert.
   */
  @Prop()
  type: 'info' | 'warn' | 'error' | 'success' = 'info';

  render(): JSX.Element {
    let alertClass = '';
    switch (this.type) {
      case 'info':
        alertClass = 'alert-info';
        break;
      case 'warn':
        alertClass = 'alert-warning';
        break;
      case 'error':
        alertClass = 'alert-danger';
        break;
      case 'success':
        alertClass = 'alert-success';
        break;
      default:
        const exhaustive: never = this.type;
        break;
    }
    return (
      <Host class={`alert ${alertClass}`}>
        <slot />
      </Host>
    );
  }
}
