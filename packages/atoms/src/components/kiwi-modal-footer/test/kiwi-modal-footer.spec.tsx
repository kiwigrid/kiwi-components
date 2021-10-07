import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { KiwiModalFooter } from '../kiwi-modal-footer';

describe('kiwi-modal-footer', () => {
  it.each`
    name                                      | props                                  | children
    ${'default'}                              | ${{}}                                  | ${undefined}
    ${'custom labels'}                        | ${{ defaultLabels: ['ok', 'otmena'] }} | ${undefined}
    ${'default buttons with slotted content'} | ${{}}                                  | ${[<span slot="kiwi-modal-footer-confirm">Confirm</span>, <span slot="kiwi-modal-footer-cancel">Abort</span>]}
    ${'custom footer'}                        | ${{ useDefault: false }}               | ${(<button>A Button</button>)}
  `('renders $name', async ({ props, name, children }) => {
    const { root } = await newSpecPage({
      components: [KiwiModalFooter],
      template: () =>
        children ? (
          <kiwi-modal-footer {...props}>{children}</kiwi-modal-footer>
        ) : (
          <kiwi-modal-footer {...props} />
        ),
    });

    expect(root).toMatchSnapshot(name);
  });
});
