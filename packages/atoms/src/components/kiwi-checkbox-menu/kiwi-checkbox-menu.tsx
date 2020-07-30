import { Component, ComponentInterface, h, JSX } from '@stencil/core';

@Component({
  tag: 'kiwi-checkbox-menu',
  styleUrl: 'kiwi-checkbox-menu.css',
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
