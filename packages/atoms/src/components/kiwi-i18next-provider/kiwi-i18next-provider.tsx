import {
  Component,
  Host,
  h,
  ComponentWillLoad,
  Prop,
  Watch,
  Event,
  EventEmitter,
} from '@stencil/core';
import i18next, { TFunction } from 'i18next';
import i18nextXhrBackend, { BackendOptions } from 'i18next-xhr-backend';
import store from './kiwi-i18next-provider.store';

@Component({
  tag: 'kiwi-i18next-provider',
  shadow: false,
})
export class KiwiI18nextProvider implements ComponentWillLoad {
  /**
   * The language to use for i18n. en as default.
   */
  @Prop()
  public lng = 'en';

  /**
   * Base path used to configure i18next backend.
   *
   * @see {BackendOptions#loadPath}
   */
  @Prop()
  public loadBasePath!: string;

  /** Namespaces to be loaded by i18next */
  @Prop()
  public ns: string[] = ['common'];

  /**
   * This event is dispatched when i18nexts t function changes
   * The t function is passed as data
   */
  @Event()
  private tFunctionChanged!: EventEmitter<TFunction>;

  @Watch('lng')
  async onLanguageChange(newLng: string): Promise<void> {
    const t = await i18next.changeLanguage(newLng);
    store.set('t', t);
    this.tFunctionChanged.emit(store.get('t'));
  }

  public async componentWillLoad(): Promise<void> {
    const backend: BackendOptions = {
      loadPath: () => `${this.loadBasePath}/{{lng}}/{{ns}}.json`,
      crossDomain: true,
    };

    const t = await i18next.use(i18nextXhrBackend).init({
      lng: this.lng,
      fallbackLng: 'en',
      // debug: true,
      ns: this.ns,
      defaultNS: 'common',
      backend,
    });

    store.set('t', t);
    this.tFunctionChanged.emit(store.get('t'));
  }

  render(): JSX.Element {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
