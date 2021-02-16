import { Component, ComponentInterface, h, Prop } from '@stencil/core';
import { init, RouteConfig, RouteHistory } from './kiwi-navigation-shell.store';

@Component({
  tag: 'kiwi-navigation-shell',
  shadow: false,
})
export class KiwiNavigationShell implements ComponentInterface {
  /**
   * Array of route configuration.
   *
   * @example
   *
   * [
   *   {
   *     routeKey: 'home',
   *     label: 'Home',
   *     url: '/home',
   *     handler: () => {
   *       location.href = '/home';
   *
   *       return [];
   *     },
   *   }
   * ]
   */
  @Prop()
  public routes!: RouteConfig<
    Record<string, unknown>,
    Record<string, unknown>
  >[];

  /**
   * Initial breadcrumb.
   *
   * @example
   *
   * [
   *   {
   *     label: 'Categories',
   *     to: { key: 'categories' },
   *   },
   *   {
   *     label: 'Household & Kitchen',
   *     to: { key: 'products', data: { categoryId: 'household+kitchen' } },
   *   },
   *   {
   *     label: 'Nicer Dicer',
   *   },
   * ]
   */
  @Prop()
  public breadcrumb: RouteHistory = [];

  /** Initial active route. */
  @Prop()
  public activeRoute = '';

  componentWillLoad(): void {
    init(this.routes, this.breadcrumb, this.activeRoute);
  }

  render(): JSX.Element {
    return <slot></slot>;
  }
}
