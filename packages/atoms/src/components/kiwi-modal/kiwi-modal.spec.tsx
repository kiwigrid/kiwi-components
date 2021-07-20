import { newSpecPage } from '@stencil/core/testing';
import { KiwiModal } from './kiwi-modal';
import { h } from '@stencil/core';

describe('kiwi-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KiwiModal],
      template: () => (
        <kiwi-modal
          id="modalId"
          with-header="true"
          with-footer="true"
          cancel-text="Cancel"
          ok-text="Ok"
          escape={true}
        >
          <i slot="modal-title">Italic Modal Header</i>
          <div slot="modal-body">Press Escape to close the modal</div>
        </kiwi-modal>
      ),
    });

    page.doc.dispatchEvent(
      new CustomEvent('showKiwiModal', { detail: 'modalId' }),
    );
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
          <i slot="modal-title">Italic Modal Header</i>
          <div slot="modal-body">{size}</div>
        </kiwi-modal>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });
});
