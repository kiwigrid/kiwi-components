import { newSpecPage } from '@stencil/core/testing';
import { KiwiDropdown } from '../kiwi-dropdown/kiwi-dropdown';
import { KiwiCheckboxDropdownMenu } from './kiwi-checkbox-dropdown-menu';

describe('kiwi-checkbox-dropdown-menu', () => {
  it('builds', async () => {
    const dropdown = await newSpecPage({
      components: [KiwiCheckboxDropdownMenu],
      html: `
        <kiwi-checkbox-dropdown-menu>
        </kiwi-checkbox-dropdown-menu>
      `,
    });

    expect(dropdown.root).toBeTruthy();
  });

  it('renders', async () => {
    const dropdown = await newSpecPage({
      components: [KiwiCheckboxDropdownMenu, KiwiDropdown],
      html: `
        <kiwi-checkbox-dropdown-menu>
          <span slot="dropdown-toggle">Toggle</span>
          <span slot="dropdown-content">Content</span>
        </kiwi-checkbox-dropdown-menu>
      `,
    });

    expect(dropdown.root).toMatchSnapshot();
  });
});
