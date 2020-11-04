import { KiwiPager } from './kiwi-pager';
import { newSpecPage } from '@stencil/core/testing';
import { fakeSchedulers } from 'rxjs-marbles/jest';

describe('kiwi-pager', () => {
  it('builds', () => {
    expect(new KiwiPager()).toBeTruthy();
  });

  it('renders', async () => {
    const pager = await newSpecPage({
      components: [KiwiPager],
      html: `<kiwi-pager page="1" total="3" of-label="vong"></kiwi-pager>`,
    });

    expect(pager.root).toMatchSnapshot();
  });

  it('renders empty', async () => {
    const pager = await newSpecPage({
      components: [KiwiPager],
      html: `<kiwi-pager page="0" total="0" ofLabel="vong"></kiwi-pager>`,
    });

    expect(pager.root).toMatchSnapshot();
  });

  it('is does not exceed bounds', async () => {
    const pager = await newSpecPage({
      components: [KiwiPager],
      html: `<kiwi-pager page="0" total="3" ofLabel="vong"></kiwi-pager>`,
    });

    const prev: HTMLButtonElement = document.querySelector(
      'button[aria-label="Previous Page"]',
    ) as HTMLButtonElement;
    const next: HTMLButtonElement = document.querySelector(
      'button[aria-label="Next Page"]',
    ) as HTMLButtonElement;

    prev.click();

    expect(pager.rootInstance.page).toEqual(0);

    next.click();
    next.click();

    expect(pager.rootInstance.page).toEqual(2);

    next.click();

    expect(pager.rootInstance.page).toEqual(2);

    const input: HTMLInputElement = document.querySelector(
      'input.pager-input',
    ) as HTMLInputElement;

    input.value = '2';
    input.dispatchEvent(new Event('input'));

    expect(pager.rootInstance.page).toEqual(1);

    input.value = '5';
    input.dispatchEvent(new Event('input'));

    expect(pager.rootInstance.page).toEqual(1);

    input.value = '-5';
    input.dispatchEvent(new Event('input'));

    expect(pager.rootInstance.page).toEqual(1);

    input.value = 'asdf';
    input.dispatchEvent(new Event('input'));

    expect(pager.rootInstance.page).toEqual(1);
  });

  it(
    'emits pageChanged event after debounce',
    fakeSchedulers(async (advance) => {
      jest.useFakeTimers();
      const pager = await newSpecPage({
        components: [KiwiPager],
        html: `<kiwi-pager page="0" total="3" ofLabel="vong"></kiwi-pager>`,
      });

      const pagerInst: KiwiPager = pager.rootInstance;

      jest.spyOn(pagerInst.pageChanged, 'emit');

      const input: HTMLInputElement = document.querySelector(
        'input.pager-input',
      ) as HTMLInputElement;
      input.value = '3';
      input.dispatchEvent(new Event('input'));

      expect(pagerInst.pageChanged.emit).not.toBeCalled();

      advance(450);
      await pager.waitForChanges();

      expect(pagerInst.pageChanged.emit).toBeCalledWith({ page: 2 });
    }),
  );
});
