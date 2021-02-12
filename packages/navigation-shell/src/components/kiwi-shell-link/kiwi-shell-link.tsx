import { Component, h, Prop, State } from '@stencil/core';
import { MaybeAsync } from '../../utils/maybe-async';
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
  public routeData?: MaybeAsync<Record<string, unknown>>;

  /** Additional css to be applied to the underlying `a` element. */
  @Prop()
  public customClass?: string;

  /**
   * If set to true will append class 'active' to the `a` element if the current
   * route equals `routeKey`. Alternatively provide a string which is used as
   * active class instead.
   * When set to false, no class will be attached (default).
   */
  @Prop()
  public activeClass: boolean | string = false;

  @State()
  private link?: { url: string; label: string; handler: (e: Event) => void };

  async componentWillLoad(): Promise<void> {
    const resolvedData = await Promise.resolve(this.routeData ?? {});

    try {
      const [url, label, handler] = await makeLink(this.routeKey, resolvedData);
      this.link = { url, label, handler };
    } catch (e) {
      console.warn(e);
    }
  }

  render(): JSX.Element {
    if (this.link === undefined) {
      return <slot>{this.routeKey}</slot>;
    }

    const { url, label, handler } = this.link;

    return (
      <a href={url} onClick={handler} class={this.classMap} key={this.routeKey}>
        <slot>{label}</slot>
      </a>
    );
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
