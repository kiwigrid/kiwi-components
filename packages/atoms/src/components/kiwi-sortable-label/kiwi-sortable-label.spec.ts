import { newSpecPage } from '@stencil/core/testing';
import { expectDefined } from '../util/testing';
import { KiwiSortableLabel } from './kiwi-sortable-label';

describe('kiwi-sortable-label', () => {
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
    const rootElement = label.root;
    expectDefined(rootElement);
    rootElement.addEventListener('sort', sortSpy);

    const a = rootElement.querySelector('a');
    a?.click();
    expect(sortSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'sort',
        detail: 'gruen',
      }),
    );
  });
});
