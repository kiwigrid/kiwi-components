import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { KiwiModalFooter } from '../kiwi-modal-footer/kiwi-modal-footer';
import { expectDefined } from '../util/testing';
import { KiwiModal } from './kiwi-modal';

describe('kiwi-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KiwiModal, KiwiModalFooter],
      template: () => (
        <kiwi-modal id="modalId" withHeader escape>
          <i slot="kiwi-modal-title">Italic Modal Header</i>
          <div slot="kiwi-modal-body">Press Escape to close the modal</div>
          <kiwi-modal-footer slot="kiwi-modal-footer" />
        </kiwi-modal>
      ),
    });

    expectDefined(page.root);
    page.root.open = true;
    await page.waitForChanges();

    expect(page.root).toHaveAttribute('open');
    expect(page.root).toMatchSnapshot();
  });

  it.each`
    size
    ${'small'}
    ${'large'}
  `('renders with size $size', async ({ size }) => {
    const page = await newSpecPage({
      components: [KiwiModal],
      template: () => (
        <kiwi-modal size={size}>
          <i slot="kiwi-modal-title">Italic Modal Header</i>
          <div slot="kiwi-modal-body">{size}</div>
        </kiwi-modal>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });
});
