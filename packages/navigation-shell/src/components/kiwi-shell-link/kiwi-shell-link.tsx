import { Component, h, Prop, State } from '@stencil/core';
import { makeLink } from '../kiwi-navigation-shell/kiwi-navigation-shell.store';

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
  public routeData?: Record<string, unknown> | Promise<Record<string, unknown>>;

  /** Additional css to be applied to the underlying `a` element. */
  @Prop()
  public customClass?: string;

  @State()
  private resolvedData?: Record<string, unknown>;

  async componentWillLoad(): Promise<void> {
    this.resolvedData = await Promise.resolve(this.routeData ?? {});
  }

  render(): JSX.Element | undefined {
    if (this.resolvedData === undefined) {
      return;
    }

    try {
      const [url, label, handler] = makeLink(this.routeKey, this.resolvedData);

      return (
        <a href={url} onClick={handler} class={this.customClass}>
          <slot>{label}</slot>
        </a>
      );
    } catch (e) {
      console.warn(e);

      return <slot>{this.routeKey}</slot>;
    }
  }
}
