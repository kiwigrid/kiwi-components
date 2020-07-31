import { Component, h, Prop } from '@stencil/core';
import { makeLink } from '../kiwi-navigation-shell/kiwi-navigation-shell.store';

@Component({
  tag: 'kiwi-shell-link',
  shadow: false,
})
export class KiwiShellLink {
  @Prop()
  public routeKey!: string;

  @Prop()
  public routeData?: any;

  render() {
    console.log('making link', {
      routeKey: this.routeKey,
      routeData: this.routeData,
    });
    try {
      const [url, handler] = makeLink(this.routeKey, this.routeData);
      return (
        <a href={url} onClick={handler}>
          <slot></slot>
        </a>
      );
    } catch (e) {
      console.warn(e);
      return null;
    }
  }
}
