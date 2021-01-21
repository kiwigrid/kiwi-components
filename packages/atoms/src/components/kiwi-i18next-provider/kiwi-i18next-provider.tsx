import {
  Component,
  ComponentWillLoad,
  h,
  Host,
  Prop,
  Watch,
} from '@stencil/core';
import { i18n } from 'i18next';
import Fetch from 'i18next-fetch-backend';
import store from './kiwi-i18next-provider.store';

@Component({
  tag: 'kiwi-i18next-provider',
  shadow: false,
})
export class KiwiI18nextProvider implements ComponentWillLoad {
  /** Uninitialized i18next instance to use. */
  @Prop()
  public i18next!: i18n;

  /**
   * Base path used to configure i18next backend.
   *
   * @see {BackendOptions#loadPath}
   */
  @Prop()
  public loadBasePath!: string;

  /**
   * The language to use for i18n. en as default.
   */
  @Prop()
  public lng = 'en';

  /** Namespaces to be loaded by i18next */
  @Prop()
  public ns: string[] = ['common'];

  @Watch('lng')
  async onLanguageChange(newLng: string): Promise<void> {
    const t = await this.i18next.changeLanguage(newLng);
    store.set('t', t);
  }

  public async componentWillLoad(): Promise<void> {
    const t = await this.i18next.use(Fetch).init({
      lng: this.lng,
      fallbackLng: 'en',
      // debug: true,
      ns: this.ns,
      defaultNS: 'common',
      backend: {
        loadPath: `${this.loadBasePath}/{{lng}}/{{ns}}.json`,
      },
    });

    store.set('t', t);
  }

  render(): JSX.Element {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
