import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { KiwiHeadingPanel } from '../kiwi-heading-panel';

describe('kiwi-heading-panel', () => {
  it.each`
    top      | left     | right    | secondary
    ${false} | ${false} | ${false} | ${false}
    ${false} | ${false} | ${false} | ${true}
    ${false} | ${false} | ${true}  | ${false}
    ${false} | ${false} | ${true}  | ${true}
    ${false} | ${true}  | ${false} | ${false}
    ${false} | ${true}  | ${false} | ${true}
    ${false} | ${true}  | ${true}  | ${false}
    ${false} | ${true}  | ${true}  | ${true}
    ${true}  | ${false} | ${false} | ${false}
    ${true}  | ${false} | ${false} | ${true}
    ${true}  | ${false} | ${true}  | ${false}
    ${true}  | ${false} | ${true}  | ${true}
    ${true}  | ${true}  | ${false} | ${false}
    ${true}  | ${true}  | ${false} | ${true}
    ${true}  | ${true}  | ${true}  | ${false}
    ${true}  | ${true}  | ${true}  | ${true}
  `(
    'renders [top: $top], [left: $left], [right: $right], [secondary: $secondary]',
    async ({ top, right, left, secondary }: Record<string, boolean>) => {
      const page = await newSpecPage({
        components: [KiwiHeadingPanel],
        template: () => (
          <kiwi-heading-panel
            withTop={top}
            withLeft={left}
            withRight={right}
            withSecondary={secondary}
          >
            <span slot="kiwi-heading-primary">Primary</span>
            <span slot="kiwi-heading-top">Top</span>
            <span slot="kiwi-heading-left">Left</span>
            <span slot="kiwi-heading-right">Right</span>
            <span slot="kiwi-heading-secondary">Secondary</span>
          </kiwi-heading-panel>
        ),
      });

      expect(page.root).toMatchSnapshot();
    },
  );
});
