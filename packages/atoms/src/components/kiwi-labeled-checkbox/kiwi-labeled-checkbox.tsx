import { Component, ComponentInterface, h, JSX, Prop } from '@stencil/core';

const pointerEventsOn = { pointerEvents: 'all' };

@Component({
  tag: 'kiwi-labeled-checkbox',
  styleUrl: 'kiwi-labeled-checkbox.css',
  shadow: false,
})
export class KiwiLabeledCheckbox implements ComponentInterface {
  /**
   * The checkbox label.
   */
  @Prop()
  label?: string;

  /**
   * The name attr of the checkbox.
   */
  @Prop()
  name!: string;

  /**
   * The value of the checkbox.
   */
  @Prop()
  checked = false;

  private input: HTMLInputElement | undefined;

  render(): JSX.Element {
    return (
      <div class="form-group checkbox">
        <input
          type="checkbox"
          ref={(el) => (this.input = el)}
          id={this.name}
          name={this.name}
          checked={this.checked}
          style={pointerEventsOn}
          onChange={this.handleInputChange}
        />
        <label htmlFor={this.name} style={pointerEventsOn}>
          {this.label == undefined ? <slot /> : this.label}
        </label>
      </div>
    );
  }

  private handleInputChange: () => void = () => {
    if (this.input) {
      this.checked = this.input.checked;
    }
  };
}
