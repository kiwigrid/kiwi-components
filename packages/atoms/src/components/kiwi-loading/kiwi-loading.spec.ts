import { KiwiLoading } from './kiwi-loading';
import { newSpecPage } from '@stencil/core/testing';

describe('kiwi-loading', () => {
  it('renders', async () => {
    const loading = await newSpecPage({
      components: [KiwiLoading],
      html: `
        <kiwi-loading text="Windows is starting"></kiwi-loading>
      `,
    });

    expect(loading.root).toMatchSnapshot('loading');

    (loading.root as HTMLKiwiLoadingElement).loading = false;
    await loading.waitForChanges();

    expect(loading.root).toMatchSnapshot('not loading');
  });
});
