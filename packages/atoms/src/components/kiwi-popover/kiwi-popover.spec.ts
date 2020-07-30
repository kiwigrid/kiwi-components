import { newSpecPage } from '@stencil/core/testing';
import { KiwiPopover } from './kiwi-popover';

describe('kiwi-popover', () => {
  it('builds', () => {
    expect(new KiwiPopover()).toBeTruthy();
  });

  it('renders', async () => {
    const popover = await newSpecPage({
      components: [KiwiPopover],
      html: `
        <kiwi-popover>
          <div slot="popover-ref">toggle</div>
          <div slot="popover-content">content</div>
        </kiwi-popover>
      `,
    });

    expect(popover.root).toMatchSnapshot();
  });

  it('renders with title', async () => {
    const popover = await newSpecPage({
      components: [KiwiPopover],
      html: `
        <kiwi-popover show-title="true">
          <div slot="popover-ref">toggle</div>
          <div slot="popover-content">content</div>
          <span slot="popover-title">My Popover</span>
        </kiwi-popover>
      `,
    });

    expect(popover.root).toMatchSnapshot();
  });
});
