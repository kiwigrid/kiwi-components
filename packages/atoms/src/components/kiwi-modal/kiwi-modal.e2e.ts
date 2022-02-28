import { newE2EPage } from '@stencil/core/testing';
import { globalStylesUrl } from '../util/testing';

describe('kiwi-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kiwi-modal></kiwi-modal>');

    const element = await page.find('kiwi-modal');
    expect(element).toHaveClass('hydrated');
  });

  it('adds class "modal-open" to body after another recently closed modal deletes it', async () => {
    const page = await newE2EPage({
      html: `
      <kiwi-modal>
        <div slot="kiwi-modal-body">Modal 1</div>
      </kiwi-modal>
      <kiwi-modal>
        <div slot="kiwi-modal-body">Modal 2</div>
      </kiwi-modal>
    `,
    });

    await page.addStyleTag({
      url: globalStylesUrl,
    });
    await page.waitForNetworkIdle();

    const modals = await page.findAll('kiwi-modal');
    const modalOne = modals[0];
    const modalTwo = modals[1];

    modalOne.setAttribute('open', '');
    await page.waitForChanges();

    let bodyClasslistContainsModalOpen = await page.$eval('body', (body) =>
      body.classList.contains('modal-open'),
    );
    expect(bodyClasslistContainsModalOpen).toBe(true);

    await modalOne.removeAttribute('open');
    await modalTwo.setAttribute('open', '');

    await page.waitForChanges();

    bodyClasslistContainsModalOpen = await page.$eval('body', (body) =>
      body.classList.contains('modal-open'),
    );
    expect(bodyClasslistContainsModalOpen).toBe(true);
  });
});
