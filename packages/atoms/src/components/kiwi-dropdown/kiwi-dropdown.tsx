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
  containerClass = '';

  /** Type of the toggle button. */
  @Prop()
  toggleButtonType: 'default' | 'primary' | 'danger' | 'warning' | 'info' =
    'default';

  /**
   * Setting this to true will cause the dropdown to close if a click is registered inside the dropdown-menu
   */
  @Prop()
  closeOnContentClick = false;

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
          onClick={this.handleContentClick}
        >
          <slot name="dropdown-content" />
        </div>
      </div>
    );
  }

  componentDidRender(): void {
    this.adjustPositionAtScreenEdge();
  }

  private handleDropdownToggle: () => void = () => {
    this.open = !this.open;
  };
  private handleMenuEnter: () => void = () => (this.hover = true);
  private handleMenuLeave: () => void = () => (this.hover = false);

  private handleContentClick: () => void = () => {
    if (!this.closeOnContentClick) return;
    this.open = !this.open;
  };

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

          this.dropdownMenu.style.marginLeft = `-${offset}px`;
        }
      } else {
        this.dropdownMenu.style.marginLeft = '';
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
