import { newSpecPage } from '@stencil/core/testing';
import { KiwiModal } from './kiwi-modal';
import { h } from '@stencil/core';
import { expectDefined } from '../util/testing';

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

    expectDefined(page.root);
    page.root.open = true;
    await page.waitForChanges();

    expect(page.root).toHaveAttribute('open');
    expect(page.root).toMatchSnapshot();
  });
});
