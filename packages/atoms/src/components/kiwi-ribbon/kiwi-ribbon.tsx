import { Component, h, Prop, Element } from '@stencil/core';

/**
 * NOTE: This component applies 'position: relative' to its parent
 * @see https://www.bootdey.com/snippets/view/Invoice-with-ribbon
 */
@Component({
  tag: 'kiwi-ribbon',
  styleUrl: 'kiwi-ribbon.css',
  shadow: false,
})
export class KiwiRibbon {
  /** The text to display in the ribbon */
  @Prop()
  text?: string;

  /** The bootstrap background color scheme to use, e.g. primary, default, ... */
  @Prop()
  backgroundColor?:
    | 'gray'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger' = 'primary';

  /** The bootstrap text color scheme to use, e.g. primary, default, ... */
  @Prop()
  textColor?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'black'
    | 'paper'
    | 'gray'
    | 'charcoal' = 'default';

  @Element()
  kiwiRibbonElement?: HTMLKiwiRibbonElement;

  componentDidRender(): void {
    if (this.kiwiRibbonElement && this.kiwiRibbonElement.parentElement) {
      this.kiwiRibbonElement.parentElement.style.position = 'relative';
    }
  }

  render(): JSX.Element {
    return (
      <div
        class={`ribbon-inner bg-${this.backgroundColor} text-${this.textColor}`}
      >
        {this.text ?? ''}
      </div>
    );
  }
}
