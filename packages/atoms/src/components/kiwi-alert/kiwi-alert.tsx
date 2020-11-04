import { Component, ComponentInterface, h, JSX, Prop } from '@stencil/core';

@Component({
  tag: 'kiwi-alert',
  styleUrl: 'kiwi-alert.css',
  shadow: false,
})
export class KiwiAlert implements ComponentInterface {
  /**
   * The type of the alert.
   */
  @Prop()
  type: 'info' | 'warn' | 'error' = 'info';

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
      default:
        const exhaustive: never = this.type;
        break;
    }
    return (
      <div class={`alert ${alertClass}`}>
        <slot />
      </div>
    );
  }
}
