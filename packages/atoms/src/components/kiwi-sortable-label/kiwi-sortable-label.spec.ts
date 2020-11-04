import { newSpecPage } from '@stencil/core/testing';
import { KiwiSortableLabel } from './kiwi-sortable-label';

describe('kiwi-sortable-label', () => {
  it('builds', () => {
    expect(new KiwiSortableLabel()).toBeTruthy();
  });

  it('renders', async () => {
    const label = await newSpecPage({
      components: [KiwiSortableLabel],
      html: `
        <kiwi-sortable-label
          label="Random"
          criterion="math.random"
          sort-key="random"
        ></kiwi-sortable-label>`,
    });

    // cycle through each sort state and finally click remove sorting

    expect(label.root).toMatchSnapshot('initial');
  });

  it('emits sort event', async () => {
    const label = await newSpecPage({
      components: [KiwiSortableLabel],
      html: `
        <kiwi-sortable-label
          label="Grün"
          sort-key="gruen"
        ></kiwi-sortable-label>`,
    });

    const sortSpy = jest.fn();
    label.root!.addEventListener('sort', sortSpy);

    const a = label.root!.querySelector('a');
    a!.click();
    expect(sortSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'sort',
        detail: 'gruen',
      }),
    );
  });
});
