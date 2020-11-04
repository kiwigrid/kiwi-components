import { Component, ComponentInterface, h, JSX, Prop } from '@stencil/core';

@Component({
  tag: 'kiwi-input',
  styleUrl: 'kiwi-input.css',
  shadow: false,
})
export class KiwiInput implements ComponentInterface {
  /**
   * The _name_ attribute of the underlying input.
   */
  @Prop()
  name?: string;

  /**
   * The _placeholder_ attribute of the underlying input.
   * Default _empty_.
   */
  @Prop()
  placeholder = '';

  /**
   * The _value_ attribute of the underlying input.
   * Default _empty_.
   */
  @Prop()
  value = '';

  private input!: HTMLInputElement;

  render(): JSX.Element {
    return (
      <input
        ref={(el) => (this.input = el as HTMLInputElement)}
        name={this.name}
        placeholder={this.placeholder}
        value={this.value}
        onInput={() => (this.value = this.input.value)}
        class="form-control"
        type="text"
      />
    );
  }
}
