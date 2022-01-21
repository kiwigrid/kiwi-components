import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  JSX,
  Listen,
  Prop,
  State,
} from '@stencil/core';

@Component({
  tag: 'kiwi-dropdown',
  shadow: false,
})
export class KiwiDropdown implements ComponentInterface {
  private dropdownMenu: HTMLDivElement | undefined;

  /**
   * Css class to be applied to container.
   */
  @Prop()
  containerClass!: string;

  /** Type of the toggle button. */
  @Prop()
  toggleButtonType: 'default' | 'primary' | 'danger' | 'warning' | 'info' =
    'default';

  @State()
  private _open = false;

  private hover = true;

  /**
   * Event signaling this dropdown is being closed.
   */
  @Event()
  closeDropdown!: EventEmitter<void>;

  @Listen('click', { target: 'window' })
  handleOutsideClick(): void {
    if (!this.hover) {
      this.open = false;
    }
  }

  render(): JSX.Element {
    return (
      <div
        class={`btn-group dropdown ${this.open ? 'open' : ''} ${
          this.containerClass
        }`}
        onMouseEnter={this.handleMenuEnter}
        onMouseLeave={this.handleMenuLeave}
      >
        <button
          class={`btn btn-${this.toggleButtonType} dropdown-toggle`}
          onClick={this.handleDropdownToggle}
        >
          <slot name="dropdown-toggle" />
        </button>
        <div
          class="dropdown-menu"
          ref={(el) => (this.dropdownMenu = el as HTMLDivElement)}
        >
          <slot name="dropdown-content" />
        </div>
      </div>
    );
  }

  private handleDropdownToggle: () => void = () => {
    this.open = !this.open;
  };
  private handleMenuEnter: () => void = () => (this.hover = true);
  private handleMenuLeave: () => void = () => (this.hover = false);

  componentDidRender(): void {
    this.adjustPositionAtScreenEdge();
  }

  /**
   * Make sure that the dropdown does not stick over the right edge of the body
   */
  private adjustPositionAtScreenEdge(): void {
    if (this.dropdownMenu) {
      if (this.open) {
        const rect = this.dropdownMenu.getBoundingClientRect();

        if (rect.right > window.visualViewport.width) {
          const offset =
            rect.width > window.visualViewport.width
              ? Math.floor(rect.left)
              : Math.ceil(rect.right - window.visualViewport.width);

          this.dropdownMenu.style.translate = `-${offset}px`;
        }
      } else {
        this.dropdownMenu.style.translate = '';
      }
    }
  }

  private set open(isOpen: boolean) {
    this._open = isOpen;

    if (!isOpen) {
      this.closeDropdown.emit();
    }
  }

  private get open(): boolean {
    return this._open;
  }
}
