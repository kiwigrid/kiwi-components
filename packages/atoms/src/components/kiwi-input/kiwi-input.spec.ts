import { newSpecPage } from '@stencil/core/testing';
import { expectDefined } from '../util/testing';
import { KiwiInput } from './kiwi-input';

describe('kiwi-input', () => {
  it('renders', async () => {
    const input = await newSpecPage({
      components: [KiwiInput],
      html: `<kiwi-input name="cvv" placeholder="Please enter your credit card's cvv"></kiwi-input>`,
    });

    expect(input.root).toEqualHtml(`
      <kiwi-input
        name="cvv"
        placeholder="Please enter your credit card's cvv"
      >
        <input
          class="form-control"
          type="text"
          name="cvv"
          placeholder="Please enter your credit card's cvv"
          type="text"
          value=""
        ></input>
      </kiwi-input>
    `);

    const inputElement = input.root?.querySelector('input');
    expectDefined(inputElement);
    inputElement.value = '123';

    await input.waitForChanges();

    expect(input.root).toEqualHtml(`
      <kiwi-input
        name="cvv"
        placeholder="Please enter your credit card's cvv"
      >
        <input
          class="form-control"
          type="text"
          name="cvv"
          placeholder="Please enter your credit card's cvv"
          type="text"
          value="123"
        ></input>
      </kiwi-input>
    `);
  });
});
