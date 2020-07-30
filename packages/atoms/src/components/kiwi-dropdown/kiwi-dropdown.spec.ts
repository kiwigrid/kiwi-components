import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { KiwiDropdown } from './kiwi-dropdown';

const newKiwiDropdown = (): Promise<SpecPage> =>
  newSpecPage({
    components: [KiwiDropdown],
    html: `
        <kiwi-dropdown container-class="fanzy">
          <span slot="dropdown-toggle">Toggle Me</span>
          <span slot="dropdown-content">Boring content</span>
        </kiwi-dropdown>
      `,
  });

describe('kiwi-dropdown', () => {
  it('builds', () => {
    expect(new KiwiDropdown()).toBeTruthy();
  });

  it('renders', async () => {
    const dropdown = await newKiwiDropdown();

    expect(dropdown.root).toMatchSnapshot('initially closed');

    dropdown.root
      ?.querySelector<HTMLButtonElement>('.dropdown-toggle')
      ?.click();
    await dropdown.waitForChanges();

    expect(dropdown.root).toMatchSnapshot('opened on click');
  });

  it('closes on outside click', async () => {
    const dropdown = await newKiwiDropdown();

    dropdown.root
      ?.querySelector<HTMLButtonElement>('.dropdown-toggle')
      ?.click();
    await dropdown.waitForChanges();

    expect(
      dropdown.root?.querySelector('.dropdown')?.classList.contains('open'),
    ).toBe(true);

    const dropdownDiv = dropdown.root?.querySelector('.dropdown');
    expect(dropdownDiv).toBeTruthy();

    if (dropdownDiv) {
      dropdownDiv.dispatchEvent(new MouseEvent('mouseenter'));
      dropdown.win.dispatchEvent(new MouseEvent('click'));
      await dropdown.waitForChanges();

      expect(dropdownDiv.classList.contains('open')).toBe(true);

      dropdownDiv.dispatchEvent(new MouseEvent('mouseleave'));
      dropdown.win.dispatchEvent(new MouseEvent('click'));
      await dropdown.waitForChanges();

      expect(dropdownDiv.classList.contains('open')).toBe(false);
    }
  });
});
