import { Component, ComponentInterface, h, JSX } from '@stencil/core';

@Component({
  tag: 'kiwi-checkbox-menu',
  shadow: false,
})
export class KiwiCheckboxMenu implements ComponentInterface {
  render(): JSX.Element {
    return (
      <ul class="checkbox-menu mb-0">
        <slot />
      </ul>
    );
  }
}
