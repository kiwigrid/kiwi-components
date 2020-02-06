import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kiwi-blueprint',
  styleUrl: 'blueprint.css',
  shadow: true
})
export class Blueprint {
  @Prop()
  public message: string = "Hello!";

  render() {
    return (
      <p>Say '{this.message}' to awesome Web Components</p>
    );
  }

}
