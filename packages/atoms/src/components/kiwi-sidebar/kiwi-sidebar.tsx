import {
  Component,
  ComponentInterface,
  h,
  Host,
  JSX,
  Prop,
  EventEmitter,
  Event,
  Listen,
} from '@stencil/core';

@Component({
  tag: 'kiwi-sidebar',
  styleUrl: 'kiwi-sidebar.css',
  shadow: false,
})
export class KiwiSidebar implements ComponentInterface {
  /** The position of the sidebar */
  @Prop()
  position!: 'left' | 'right';

  /** Visibility of the sidebar */
  @Prop()
  visible!: boolean;

  /** Event signaling a backdrop click. */
  @Event()
  requestClose!: EventEmitter<void>;

  @Listen('keydown', { target: 'document' })
  handleCloseOnEscape(ev: KeyboardEvent): void {
    if (!this.visible) {
      return;
    }

    if (ev.key && ev.key.startsWith('Esc')) {
      this.requestClose.emit();
    }
  }

  render(): JSX.Element {
    const offcanvas = this.visible ? `offcanvas-${this.position}` : '';
    const sidebar = `sidebar-offcanvas sidebar-${this.position} bg-gray p-2`;
    return (
      <Host class={offcanvas}>
        <div
          aria-label="Close Sidebar"
          aria-hidden="true"
          class="nav-backdrop"
          style={{ zIndex: this.visible ? '30' : '-1' }}
          onClick={this.handleBackdropClick}
        ></div>
        <div class={sidebar} aria-hidden={this.visible ? 'false' : 'true'}>
          <div class="sidebar-inner">
            <slot />
          </div>
        </div>
      </Host>
    );
  }

  private handleBackdropClick = (): void => {
    this.requestClose.emit();
  };
}
