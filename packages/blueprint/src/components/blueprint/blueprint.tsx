import { Component, h, JSX, Prop } from '@stencil/core';

@Component({
  tag: 'kiwi-blueprint',
  styleUrl: 'blueprint.css',
  shadow: true,
})
export class Blueprint {
  /** Say something smart. */
  @Prop()
  public message = 'Hello!';

  render(): JSX.Element {
    return <p>Say '{this.message}' to awesome Web Components</p>;
  }
}
