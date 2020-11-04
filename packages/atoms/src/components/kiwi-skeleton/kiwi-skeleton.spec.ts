import { newSpecPage } from '@stencil/core/testing';
import { KiwiSkeleton } from './kiwi-skeleton';

describe('kiwi-skeleton', () => {
  it('builds', () => {
    expect(new KiwiSkeleton()).toBeTruthy();
  });

  describe('paragraph', () => {
    it('renders', async () => {
      const skeleton = await newSpecPage({
        components: [KiwiSkeleton],
        html: `
        <kiwi-skeleton />
      `,
      });

      expect(skeleton.root).toMatchSnapshot('default rows');
    });

    it('renders 6 rows', async () => {
      const skeleton = await newSpecPage({
        components: [KiwiSkeleton],
        html: `
        <kiwi-skeleton rows="6" />
      `,
      });

      expect(skeleton.root).toMatchSnapshot('6 rows');
    });
  });

  describe('table', () => {
    it('renders', async () => {
      const skeleton = await newSpecPage({
        components: [KiwiSkeleton],
        html: `
        <kiwi-skeleton type="table"/>
      `,
      });

      expect(skeleton.root).toMatchSnapshot();
    });
  });
});
