import { KiwiI18nextProvider } from './kiwi-i18next-provider';
import { newSpecPage } from '@stencil/core/testing';
import store from './kiwi-i18next-provider.store';

describe('kiwi-i18next-provider', () => {
  beforeEach(() => {
    store.reset();
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [KiwiI18nextProvider],
      html: `<kiwi-i18next-provider lng="de"></kiwi-i18next-provider>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('reacts to changes', async () => {
    const page = await newSpecPage({
      components: [KiwiI18nextProvider],
      html: `<kiwi-i18next-provider lng="de"></kiwi-i18next-provider>`,
    });

    expect(store.get('t')('inc:label.energyPlant')).toEqual('Anlage');

    (page.rootInstance as KiwiI18nextProvider).lng = 'en';

    expect(store.get('t')('inc:label.energyPlant')).toEqual('Energy plant');
  });
});
