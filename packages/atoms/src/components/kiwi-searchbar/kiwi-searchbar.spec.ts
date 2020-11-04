import { newSpecPage } from '@stencil/core/testing';
import { fakeSchedulers } from 'rxjs-marbles/jest';
import { KiwiInput } from '../kiwi-input/kiwi-input';
import { KiwiSearchbar } from './kiwi-searchbar';

describe('kiwi-searchbar', () => {
  it('builds', () => {
    const searchbar = new KiwiSearchbar();
    expect(searchbar).toBeTruthy();
    expect(searchbar.debounce).toEqual(400);
  });

  it('renders', async () => {
    const searchbar = await newSpecPage({
      components: [KiwiSearchbar, KiwiInput],
      html: `<kiwi-searchbar></kiwi-searchbar>`,
    });

    expect(searchbar.root).toMatchSnapshot();
  });

  it('emits search event on button click', async () => {
    const searchbar = await newSpecPage({
      components: [KiwiSearchbar, KiwiInput],
      html: `<kiwi-searchbar></kiwi-searchbar>`,
    });

    const searchbarInstance = searchbar.rootInstance;

    jest.spyOn(searchbarInstance.triggerSearch, 'emit');

    searchbar.root!.querySelector('input')!.value = 'abc';
    searchbar
      .root!.querySelector<HTMLButtonElement>('button[aria-label="Search"]')!
      .click();

    expect(searchbarInstance.triggerSearch.emit).toHaveBeenCalled();
  });

  it('shows remove button', async () => {
    const searchbar = await newSpecPage({
      components: [KiwiSearchbar],
      html: `<kiwi-searchbar value="query"></kiwi-searchbar>`,
    });

    const searchbarInstance = searchbar.rootInstance;

    jest.spyOn(searchbarInstance.triggerSearch, 'emit');

    searchbar
      .root!.querySelector<HTMLButtonElement>('button[aria-label="Clear"]')!
      .click();

    expect(searchbarInstance.triggerSearch.emit).toBeCalledWith('');
  });

  describe('async behaviour', () => {
    beforeEach(() => jest.useFakeTimers());

    it(
      'emits search event on type',
      fakeSchedulers(async (advance) => {
        const searchbar = await newSpecPage({
          components: [KiwiSearchbar, KiwiInput],
          html: `<kiwi-searchbar debounce="1000"></kiwi-searchbar>`,
        });

        const triggerSearchSpy = jest.fn();
        searchbar.root!.addEventListener('triggerSearch', triggerSearchSpy);

        const input = searchbar.root!.querySelector('kiwi-input');
        input!.value = '123';
        input!.dispatchEvent(new Event('input'));
        await searchbar.waitForChanges();

        expect(triggerSearchSpy).not.toHaveBeenCalled();
        advance(800);
        expect(triggerSearchSpy).not.toHaveBeenCalled();
        advance(200);
        expect(triggerSearchSpy).toHaveBeenCalledWith(
          expect.objectContaining({ detail: '123' }),
        );
      }),
    );
  });
});
