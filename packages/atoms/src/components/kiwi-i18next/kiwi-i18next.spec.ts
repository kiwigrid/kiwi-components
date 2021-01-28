import { newSpecPage } from '@stencil/core/testing';
import store from '../kiwi-i18next-provider/kiwi-i18next-provider.store';
import { KiwiI18next } from './kiwi-i18next';

describe('kiwi-i18next', () => {
  beforeEach(() => {
    store.dispose();
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [KiwiI18next],
      html: `
        <kiwi-i18next msgKey="inc:label.energyPlant"></kiwi-i18next>
      `,
    });

    store.set('t', () => 'Anlage');
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot('de');

    store.set('t', () => 'Energy plant');
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot('en');
  });
});
