import { newSpecPage } from '@stencil/core/testing';
import { KiwiCheckboxMenu } from './kiwi-checkbox-menu';

describe('kiwi-checkbox-menu', () => {
  it('builds', () => {
    expect(new KiwiCheckboxMenu()).toBeTruthy();
  });

  it('renders', async () => {
    const menu = await newSpecPage({
      components: [KiwiCheckboxMenu],
      html: `
        <kiwi-checkbox-menu>
          <li>There can be only one</li>
        </kiwi-checkbox-menu>
      `,
    });

    expect(menu.root).toMatchSnapshot();
  });
});
