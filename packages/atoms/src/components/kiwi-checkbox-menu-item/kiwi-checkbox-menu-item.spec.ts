import { newSpecPage } from '@stencil/core/testing';
import { KiwiCheckboxMenuItem } from './kiwi-checkbox-menu-item';

describe('kiwi-checkbox-menu-item', () => {
  it('builds', () => {
    expect(new KiwiCheckboxMenuItem()).toBeTruthy();
  });

  it('renders', async () => {
    const item = await newSpecPage({
      components: [KiwiCheckboxMenuItem],
      html: `<kiwi-checkbox-menu-item><span>Slot Child</span></kiwi-checkbox-menu-item>`,
    });

    expect(item.root).toMatchSnapshot();
  });
});
