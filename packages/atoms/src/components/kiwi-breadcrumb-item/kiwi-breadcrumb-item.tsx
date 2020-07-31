import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'kiwi-breadcrumb-item',
  styleUrl: 'kiwi-breadcrumb-item.css',
  shadow: false,
})
export class KiwiBreadcrumbItem implements ComponentInterface {
  render(): JSX.Element {
    return (
      <li class="breadcrumb-item">
        <slot></slot>
      </li>
    );
  }
}
