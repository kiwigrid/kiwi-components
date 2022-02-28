import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import i18next from 'i18next';
import { KiwiI18nextProvider } from './kiwi-i18next-provider';
import store from './kiwi-i18next-provider.store';

describe('kiwi-i18next-provider', () => {
  beforeEach(() => {
    store.dispose();
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [KiwiI18nextProvider],
      template: () => (
        <kiwi-i18next-provider
          i18next={i18next}
          lng="de"
          loadBasePath=""
        ></kiwi-i18next-provider>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it('reacts to changes', async () => {
    const page = await newSpecPage({
      components: [KiwiI18nextProvider],
      template: () => (
        <kiwi-i18next-provider
          i18next={i18next}
          lng="de"
          loadBasePath=""
        ></kiwi-i18next-provider>
      ),
    });

    expect(store.get('t')('common:hello')).toEqual('Hallo');

    (page.root as HTMLKiwiI18nextProviderElement).lng = 'en';

    expect(store.get('t')('common:hello')).toEqual('Hello');
  });
});
