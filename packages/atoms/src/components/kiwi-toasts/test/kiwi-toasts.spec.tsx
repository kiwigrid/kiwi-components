import { newSpecPage } from '@stencil/core/testing';
import { expectDefined } from '../../util/testing';
import { KiwiToasts } from '../kiwi-toasts';

const event = {
  success: {
    title: 'SUCCESS',
    description: 'Das hat geklappt!',
    type: 'success',
    timeout: 1000,
  },
  error: {
    title: 'ERROR',
    description: 'Das hat nicht geklappt!',
    type: 'error',
    timeout: 0,
  },
};

describe('kiwi-toasts', () => {
  it('shows toast on event', async () => {
    const page = await newSpecPage({
      components: [KiwiToasts],
      html: `<kiwi-toasts></kiwi-toasts>`,
    });

    expectDefined(page.root);
    page.root.dispatchEvent(
      new CustomEvent('kiwiToast', { detail: event.error }),
    );
    await page.waitForChanges();

    expect(page.root.querySelectorAll('kiwi-alert').length).toEqual(1);
  });

  it('autoremoves toast after duration', async () => {
    const page = await newSpecPage({
      components: [KiwiToasts],
      html: `<kiwi-toasts></kiwi-toasts>`,
    });

    expectDefined(page.root);
    page.root.dispatchEvent(
      new CustomEvent('kiwiToast', { detail: event.success }),
    );
    await page.waitForChanges();

    expect(page.root.querySelectorAll('kiwi-alert').length).toEqual(1);

    await new Promise((t) => setTimeout(t, event.success.timeout + 100));
    await page.waitForChanges();

    expect(page.root.querySelectorAll('kiwi-alert').length).toEqual(0);
  });

  it('removes toast on x-click', async () => {
    const page = await newSpecPage({
      components: [KiwiToasts],
      html: `<kiwi-toasts></kiwi-toasts>`,
    });

    expectDefined(page.root);
    page.root.dispatchEvent(
      new CustomEvent('kiwiToast', { detail: event.error }),
    );
    await page.waitForChanges();

    expect(page.root.querySelectorAll('kiwi-alert').length).toEqual(1);

    const closebutton = page.root?.querySelector('button');
    closebutton?.click();
    await page.waitForChanges();

    expect(page.root.querySelectorAll('kiwi-alert').length).toEqual(0);
  });
});
