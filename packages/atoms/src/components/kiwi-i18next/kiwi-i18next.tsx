import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import store from '../kiwi-i18next-provider/kiwi-i18next-provider.store';

@Component({
  tag: 'kiwi-i18next',
  shadow: false,
})
export class KiwiI18next implements ComponentInterface {
  /** The key to translate */
  @Prop()
  msgKey!: string;

  render(): JSX.Element {
    return <Host>{store.get('t')(this.msgKey)}</Host>;
  }
}
