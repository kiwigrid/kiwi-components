import { Component, Element, h, Method, Prop } from '@stencil/core';
import navShellState, {
  makeLink,
  registerRouteChangeListener,
  unregisterRouteChangeListener,
} from '../kiwi-navigation-shell/kiwi-navigation-shell.store';

@Component({
  tag: 'kiwi-shell-link-decorator',
  shadow: false,
})
export class KiwiShellLinkDecorator {
  /** Route data keyed by route key. Will be passed as route data. */
  @Prop()
  routeData: Record<string, Record<string, unknown>> = {};

  /** Class added to elements marked with `data-shell-active="your-route"` */
  @Prop()
  activeClass = 'active';

  @Element()
  private ref?: HTMLKiwiShellLinkDecoratorElement;

  private unregisterFunctions: (() => void)[] = [];

  async componentWillLoad(): Promise<void> {
    registerRouteChangeListener(this.handleRouteChange);

    const makeLinkPromises = Array.from(
      this.ref?.querySelectorAll('a[data-shell-route]') ?? [],
      async (a) => {
        const key = a.getAttribute('data-shell-route');

        if (!key) {
          return;
        }

        const data = this.routeData[key] ?? {};

        try {
          const [url, , onClick] = await makeLink(key, data);

          a.setAttribute('href', url);
          a.addEventListener('click', onClick);

          this.unregisterFunctions = [
            ...this.unregisterFunctions,
            () => {
              a.removeEventListener('click', onClick);
            },
          ];
        } catch (e) {
          console.warn(e);
        }
      },
    );

    await Promise.all(makeLinkPromises);

    this.handleRouteChange(navShellState.activeRoute);
  }

  render(): JSX.Element {
    return <slot></slot>;
  }

  /**
   * Cleanup listeners.
   */
  @Method()
  async cleanup(): Promise<void> {
    this.unregisterFunctions.forEach((unregister) => unregister());
    unregisterRouteChangeListener(this.handleRouteChange);
  }

  private handleRouteChange = (activeRoute: string): void => {
    this.ref?.querySelectorAll(`[data-shell-active]`).forEach((el) => {
      const route = (el as HTMLElement).dataset?.shellActive;

      if (route === activeRoute) {
        el.classList.add(this.activeClass);
      } else {
        el.classList.remove(this.activeClass);
      }
    });
  };
}
