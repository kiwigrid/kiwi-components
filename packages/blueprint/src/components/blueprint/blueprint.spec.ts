import { Blueprint } from './blueprint';

describe('kiwi-blueprint', () => {
  it('builds', () => {
    expect(new Blueprint()).toBeTruthy();
  });
});
