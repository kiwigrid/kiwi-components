import { Component, ComponentInterface, h, JSX, Prop } from '@stencil/core';

@Component({
  tag: 'kiwi-input',
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
        type="text"
        name={this.name}
        placeholder={this.placeholder}
        value={this.value}
        onInput={this.handleOnInput}
        class="form-control"
      />
    );
  }

  private handleOnInput = (): void => {
    this.value = this.input.value;
  };
}
