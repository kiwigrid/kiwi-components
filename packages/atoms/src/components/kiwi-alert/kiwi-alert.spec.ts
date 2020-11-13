import { newSpecPage } from '@stencil/core/testing';
import { KiwiAlert } from './kiwi-alert';

describe('kiwi-alert', () => {
  ['info', 'warn', 'error'].forEach((type) => {
    it(`renders ${type}`, async () => {
      const alert = await newSpecPage({
        components: [KiwiAlert],
        html: `
          <kiwi-alert type="${type}">
            <span>${type}</span>
          </kiwi-alert>
        `,
      });

      expect(alert.root).toMatchSnapshot(type);
    });
  });
});
