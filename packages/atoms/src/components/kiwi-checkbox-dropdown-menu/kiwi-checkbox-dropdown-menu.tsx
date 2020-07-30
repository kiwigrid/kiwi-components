import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  JSX,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'kiwi-checkbox-dropdown-menu',
  styleUrl: 'kiwi-checkbox-dropdown-menu.css',
  shadow: false,
})
export class KiwiCheckboxDropdownMenu implements ComponentInterface {
  /** Event signaling that this dropdown was closed. */
  @Event()
  closeDropdown!: EventEmitter<void>;

  /** Type of the toggle button. */
  @Prop()
  toggleButtonType: 'default' | 'primary' | 'danger' | 'warning' | 'info' =
    'default';

  render(): JSX.Element {
    return (
      <kiwi-dropdown
        containerClass="checkbox-dropdown-menu"
        onCloseDropdown={this.handleCloseDropdown}
        toggleButtonType={this.toggleButtonType}
      >
        <slot name="dropdown-toggle" slot="dropdown-toggle" />
        <slot name="dropdown-content" slot="dropdown-content" />
      </kiwi-dropdown>
    );
  }

  private handleCloseDropdown = (): void => {
    this.closeDropdown.emit();
  };
}
