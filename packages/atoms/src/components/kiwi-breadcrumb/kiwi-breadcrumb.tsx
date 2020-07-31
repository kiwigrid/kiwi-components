import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'kiwi-breadcrumb',
  shadow: false,
})
export class KiwiBreadcrumb implements ComponentInterface {
  render(): JSX.Element {
    return (
      <nav>
        <ol class="breadcrumb d-flex align-items-center">
          <slot></slot>
        </ol>
      </nav>
    );
  }
}
