import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { fakeSchedulers } from 'rxjs-marbles/jest';
import { expectDefined } from '../util/testing';
import { KiwiPager } from './kiwi-pager';

describe('kiwi-pager', () => {
  it('renders', async () => {
    const pager = await newSpecPage({
      components: [KiwiPager],
      template: () => (
        <kiwi-pager page={1} total={3} ofLabel="vong"></kiwi-pager>
      ),
    });

    expect(pager.root).toMatchSnapshot();

    pager.rootInstance?.disconnectedCallback();
  });

  it('renders empty', async () => {
    const pager = await newSpecPage({
      components: [KiwiPager],
      template: () => (
        <kiwi-pager page={0} total={0} ofLabel="vong"></kiwi-pager>
      ),
    });

    expect(pager.root).toMatchSnapshot();

    pager.rootInstance?.disconnectedCallback();
  });

  it('is does not exceed bounds', async () => {
    const pager = await newSpecPage({
      components: [KiwiPager],
      template: () => (
        <kiwi-pager page={0} total={3} ofLabel="vong"></kiwi-pager>
      ),
    });

    const prev = document.querySelector<HTMLButtonElement>(
      'button[aria-label="Previous Page"]',
    );
    const next = document.querySelector<HTMLButtonElement>(
      'button[aria-label="Next Page"]',
    );

    prev?.click();

    expect(pager.rootInstance.page).toEqual(0);

    next?.click();
    next?.click();

    expect(pager.rootInstance.page).toEqual(2);

    next?.click();

    expect(pager.rootInstance.page).toEqual(2);

    const input = document.querySelector<HTMLInputElement>('input.pager-input');

    expectDefined(input);

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

    pager.rootInstance?.disconnectedCallback();
  });

  it('emits pageChanged event after debounce', async () => {
    jest.useFakeTimers();

    const pager = await newSpecPage({
      components: [KiwiPager],
      template: () => (
        <kiwi-pager
          page={0}
          total={3}
          ofLabel="vong"
          debounce={400}
        ></kiwi-pager>
      ),
    });

    fakeSchedulers((advance) => {
      const pagerInst: KiwiPager = pager.rootInstance;

      jest.spyOn(pagerInst.pageChanged, 'emit');

      const input = document.querySelector<HTMLInputElement>(
        'input.pager-input',
      );

      expectDefined(input);

      input.value = '1';
      input.dispatchEvent(new Event('input'));
      input.value = '2';
      input.dispatchEvent(new Event('input'));
      input.value = '3';
      input.dispatchEvent(new Event('input'));

      advance(400);

      expect(pagerInst.pageChanged.emit).toBeCalledTimes(1);
      expect(pagerInst.pageChanged.emit).toBeCalledWith({ page: 2 });

      pager.rootInstance?.disconnectedCallback();
    })();

    jest.useRealTimers();
  });
});
