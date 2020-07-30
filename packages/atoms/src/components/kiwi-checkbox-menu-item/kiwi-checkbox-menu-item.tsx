import { Component, ComponentInterface, h, JSX } from '@stencil/core';

@Component({
  tag: 'kiwi-checkbox-menu-item',
  styleUrl: 'kiwi-checkbox-menu-item.css',
  shadow: false,
})
export class KiwiCheckboxMenuItem implements ComponentInterface {
  render(): JSX.Element {
    return (
      <li class="checkbox-menu-item pointer">
        <slot />
      </li>
    );
  }
}
