import {
  Component,
  ComponentInterface,
  Element,
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
  @Element()
  el: HTMLElement | undefined;

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
        <div class="dropdown-menu">
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
    // make sure that the dropdown does not stick over the right edge of the body
    if(this.el) {
      const dropdown = this.el.querySelector('.dropdown-menu') as HTMLElement;
      if (this.open) {
        const ddBoundingRect = dropdown.getBoundingClientRect();
        let offset = Math.ceil(
          ddBoundingRect.right - window.visualViewport.width,
        );

        if (offset > 0) {
          // if the popup is wider than the screen then make it start at the left screen edge
          if (ddBoundingRect.left - offset < 0) {
            offset = ddBoundingRect.left;
          }
          dropdown.style.translate = `-${Math.ceil(offset)}px`;
        }
      } else {
        dropdown.style.translate = '0px';
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
