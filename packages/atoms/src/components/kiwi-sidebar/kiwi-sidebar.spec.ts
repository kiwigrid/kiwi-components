import { KiwiSidebar } from './kiwi-sidebar';
import { newSpecPage } from '@stencil/core/testing';

describe('kiwi-sidebar', () => {
  it('renders', async () => {
    const sidebarLeft = await newSpecPage({
      components: [KiwiSidebar],
      html: `
        <kiwi-sidebar position="left" visible>
          <span>Content</span>
        </kiwi-sidebar>
      `,
    });

    expect(sidebarLeft.root).toMatchSnapshot('left');

    const sidebarRight = await newSpecPage({
      components: [KiwiSidebar],
      html: `
        <kiwi-sidebar position="right" visible>
          <span>Content</span>
        </kiwi-sidebar>
      `,
    });

    expect(sidebarRight.root).toMatchSnapshot('right');

    const sidebarClosed = await newSpecPage({
      components: [KiwiSidebar],
      html: `
        <kiwi-sidebar position="left">
          <span>Content</span>
        </kiwi-sidebar>
      `,
    });

    expect(sidebarClosed.root).toMatchSnapshot('closed');
  });

  it('handles backdrop click', async () => {
    const sidebar = await newSpecPage({
      components: [KiwiSidebar],
      html: `
        <kiwi-sidebar position="left" visible>
          <span>Content</span>
        </kiwi-sidebar>
      `,
    });

    const sidebarInst: KiwiSidebar = sidebar.rootInstance;
    const sidebarElem = sidebar.root;

    jest.spyOn(sidebarInst.requestClose, 'emit');

    sidebarElem?.querySelector<HTMLDivElement>('.nav-backdrop')?.click();

    expect(sidebarInst.requestClose.emit).toBeCalled();
  });

  it('handles esc key', async () => {
    const sidebar = await newSpecPage({
      components: [KiwiSidebar],
      html: `
        <kiwi-sidebar position="left" visible>
          <span>Content</span>
        </kiwi-sidebar>
      `,
    });

    const sidebarInst: KiwiSidebar = sidebar.rootInstance;
    const sidebarElem = sidebar.root as HTMLKiwiSidebarElement;

    jest.spyOn(sidebarInst.requestClose, 'emit');

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Esc',
      }),
    );

    expect(sidebarInst.requestClose.emit).toBeCalled();

    sidebarElem.visible = false;

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Esc',
      }),
    );

    expect(sidebarInst.requestClose.emit).toBeCalledTimes(1);

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'A',
      }),
    );

    expect(sidebarInst.requestClose.emit).toBeCalledTimes(1);

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: undefined,
      }),
    );

    expect(sidebarInst.requestClose.emit).toBeCalledTimes(1);
  });
});
