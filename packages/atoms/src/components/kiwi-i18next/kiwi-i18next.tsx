import {
  Component,
  ComponentInterface,
  h,
  Host,
  JSX,
  Prop,
} from '@stencil/core';
import { TOptions } from 'i18next';
import store from '../kiwi-i18next-provider/kiwi-i18next-provider.store';

@Component({
  tag: 'kiwi-i18next',
  shadow: false,
})
export class KiwiI18next implements ComponentInterface {
  /** The key to translate */
  @Prop()
  msgKey!: string;

  /** Options passed to i18next's t function */
  @Prop()
  options?: TOptions | string;

  render(): JSX.Element {
    return <Host>{store.get('t')(this.msgKey, this.options)}</Host>;
  }
}
