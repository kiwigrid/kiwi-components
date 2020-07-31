import { newSpecPage } from '@stencil/core/testing';
import { KiwiLabeledCheckbox } from './kiwi-labeled-checkbox';

describe('kiwi-labeled-checkbox', () => {
  it('builds', async () => {
    const checkbox = await newSpecPage({
      components: [KiwiLabeledCheckbox],
      html: `
      <kiwi-labeled-checkbox></kiwi-labeled-checkbox>
      `,
    });
    expect(checkbox.root).toBeTruthy();
  });

  it('renders', async () => {
    const checkbox = await newSpecPage({
      components: [KiwiLabeledCheckbox],
      html: `
        <kiwi-labeled-checkbox
          label="My Checkbox"
          name="my-checkbox"
        ></kiwi-labeled-checkbox>
      `,
    });

    expect(checkbox.root).toMatchSnapshot();

    const checkboxChecked = await newSpecPage({
      components: [KiwiLabeledCheckbox],
      html: `
        <kiwi-labeled-checkbox
          label="My Checkbox"
          name="my-checkbox"
          checked="true"
        ></kiwi-labeled-checkbox>
      `,
    });

    expect(checkboxChecked.root).toMatchSnapshot('checked');
  });
});
