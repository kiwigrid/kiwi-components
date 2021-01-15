import { Blueprint } from './blueprint';
import { newSpecPage } from '@stencil/core/testing';

describe('kiwi-blueprint', () => {
  it('builds', async () => {
    const blueprint = await newSpecPage({
      components: [Blueprint],
      html: `<kiwi-blueprint></kiwi-blueprint>`,
    });
    expect(blueprint.root).toBeTruthy();
  });
});
