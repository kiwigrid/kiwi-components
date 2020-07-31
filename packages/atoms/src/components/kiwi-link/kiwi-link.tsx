import {
  Component,
  h,
  Prop,
  Event,
  EventEmitter,
  ComponentInterface,
} from '@stencil/core';

export interface NavigateToEvent {
  commands: string[];
  extras?: unknown;
}

@Component({
  tag: 'kiwi-link',
  shadow: false,
})
export class KiwiLink implements ComponentInterface {
  /** The navigation destination. Can be either a url or a `NavigateToEvent` */
  @Prop()
  public to!: string | NavigateToEvent;

  /** Dummy event documentation - please fix me! */
  @Event({
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  private navigateTo!: EventEmitter<NavigateToEvent>;

  render(): JSX.Element {
    let href: string;
    if (typeof this.to !== 'string') {
      href = this.to.commands.join('/');
    } else {
      href = this.to;
    }
    return (
      <a href={href} onClick={this.handleNavigation}>
        <slot></slot>
      </a>
    );
  }

  private handleNavigation = (ev: MouseEvent): void => {
    let event: NavigateToEvent;
    if (typeof this.to === 'string') {
      event = {
        commands: [this.to],
      };
    } else {
      event = this.to;
    }

    ev.preventDefault();
    this.navigateTo.emit(event);
  };
}
