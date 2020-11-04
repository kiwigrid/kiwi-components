import { KiwiLabel, LabelKind } from './kiwi-label';
import { toPairs } from 'lodash-es';
import { newSpecPage } from '@stencil/core/testing';

const testCases: { [Key in LabelKind]: Key } = {
  danger: 'danger',
  default: 'default',
  info: 'info',
  success: 'success',
  warning: 'warning',
};

describe('kiwi-label', () => {
  it('builds', () => {
    expect(new KiwiLabel()).toBeTruthy();
  });

  it.each(toPairs(testCases))('renders %s', async (name, kind) => {
    const label = await newSpecPage({
      components: [KiwiLabel],
      html: `
        <kiwi-label kind="${kind}">${name}</kiwi-label>
      `,
    });

    expect(label.root).toMatchSnapshot();
  });
});
