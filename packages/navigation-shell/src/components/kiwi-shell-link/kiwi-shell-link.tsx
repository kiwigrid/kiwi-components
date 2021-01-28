import { Component, h, Prop } from '@stencil/core';
import {
  isActive,
  makeLink,
} from '../kiwi-navigation-shell/kiwi-navigation-shell.store';

@Component({
  tag: 'kiwi-shell-link',
  shadow: false,
})
export class KiwiShellLink {
  /** The key of the route config this link should be built off of. */
  @Prop()
  public routeKey!: string;

  /** Data associated to this route. */
  @Prop()
  public routeData: Record<string, unknown> = {};

  /** Additional css to be applied to the underlying `a` element. */
  @Prop()
  public customClass?: string;

  /**
   * If set to true will append class 'active' to the `a` element. Alternatively
   * provide a string which is used as active class instead.
   * When set to false, no class will be attached (default).
   */
  @Prop()
  public activeClass: boolean | string = false;

  render(): JSX.Element {
    try {
      const [url, label, handler] = makeLink(this.routeKey, this.routeData);

      return (
        <a href={url} onClick={handler} class={this.classMap}>
          <slot>{label}</slot>
        </a>
      );
    } catch (e) {
      console.warn(e);

      return <slot>{this.routeKey}</slot>;
    }
  }

  private get classMap(): Record<string, boolean> {
    const activeClass =
      this.activeClass === true ? 'active' : `${this.activeClass}`;

    return {
      [this.customClass ?? '']: typeof this.customClass === 'string',
      [activeClass]: this.activeClass !== false && isActive(this.routeKey),
    };
  }
}
