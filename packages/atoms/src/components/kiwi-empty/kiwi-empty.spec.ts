import { newSpecPage } from '@stencil/core/testing';
import { KiwiEmpty } from './kiwi-empty';

describe('kiwi-empty', () => {
  it('builds', () => {
    expect(new KiwiEmpty()).toBeTruthy();
  });

  // [
  //   ['default', { data: [] }],
  //   ['content', { data: ['with-content', 'true'], content: 'No data' }],
  //   ['glyphicon suffix', { data: ['glyphicon', 'kittens'] }],
  //   ['custom class', { data: ['icon', 'icon icon-beer'] }],
  //   ['size: small', { data: ['size', 'small'] }],
  //   ['size: medium', { data: ['size', 'medium'] }],
  //   ['size: large', { data: ['size', 'large'] }],
  // ].forEach(
  //   ([
  //     title,
  //     {
  //       data: [prop, value],
  //       content,
  //     },
  //   ]: [string, { data: [string, string]; content?: string }]) => {
  //     it(`renders ${title}`, async () => {
  //       const empty = await newSpecPage({
  //         components: [KiwiEmpty],
  //         html: content
  //           ? `<kiwi-empty ${prop}="${value}">${content}</kiwi-empty>`
  //           : `<kiwi-empty ${prop}="${value}" />`,
  //       });

  //       expect(empty.root).toMatchSnapshot();
  //     });
  //   },
  // );

  it.each([
    ['default', { data: [] }],
    ['content', { data: ['with-content', 'true'], content: 'No data' }],
    ['glyphicon suffix', { data: ['glyphicon', 'kittens'] }],
    ['custom class', { data: ['icon', 'icon icon-beer'] }],
    ['size: small', { data: ['size', 'small'] }],
    ['size: medium', { data: ['size', 'medium'] }],
    ['size: large', { data: ['size', 'large'] }],
  ])('renders %s', async (title, args) => {
    const prop = args.data[0];
    const value = args.data[1];
    const content = (args as { data: string[]; content: string }).content;

    const empty = await newSpecPage({
      components: [KiwiEmpty],
      html: content
        ? `<kiwi-empty ${prop}="${value}">${content}</kiwi-empty>`
        : `<kiwi-empty ${prop}="${value}" />`,
    });

    expect(empty.root).toMatchSnapshot();
  });
});
