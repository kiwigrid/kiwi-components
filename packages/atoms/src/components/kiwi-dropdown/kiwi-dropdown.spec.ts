import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { KiwiDropdown } from './kiwi-dropdown';
import { expectDefined } from '../util/testing';

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
  beforeEach(() => {
    Object.defineProperty(window, 'visualViewport', {
      value: { width: 1920 },
      writable: true,
    });
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

  it.each`
    left    | right   | expected
    ${50}   | ${350}  | ${''}
    ${1700} | ${2000} | ${'-80px'}
    ${100}  | ${3000} | ${'-100px'}
  `(
    'translates the dropdown { left: $left, right: $right } horizontally by $expected for FullHD screen',
    async ({ left, right, expected }) => {
      const dropdown = await newKiwiDropdown();

      const dropdownMenu = dropdown.root?.querySelector(
        '.dropdown-menu',
      ) as HTMLDivElement;
      expectDefined(dropdownMenu);

      dropdownMenu.getBoundingClientRect = jest.fn(() => {
        return {
          left: left,
          right: right,
          width: right - left,
        } as DOMRect;
      });

      dropdown.root
        ?.querySelector<HTMLButtonElement>('.dropdown-toggle')
        ?.click();
      await dropdown.waitForChanges();

      expect(dropdownMenu.style.translate).toEqual(expected);
    },
  );

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
