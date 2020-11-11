import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  JSX,
  Prop,
} from '@stencil/core';

export type SortDirection = 'asc' | 'desc' | 'off';

@Component({
  tag: 'kiwi-sortable-label',
  shadow: false,
})
export class KiwiSortableLabel implements ComponentInterface {
  /**
   * The label to be displayed.
   */
  @Prop()
  label?: string;

  /**
   * The key to be sent by sort event.
   */
  @Prop()
  sortKey!: string;

  /**
   * The initial sort direction.
   */
  @Prop()
  sortDirection: SortDirection = 'off';

  /**
   * Sort event sent when clicked on a label.
   */
  @Event()
  sort!: EventEmitter<string>;

  render(): JSX.Element {
    const availableIcons = {
      off: 'glyphicon-sort',
      desc: 'glyphicon-sort-by-alphabet-alt',
      asc: 'glyphicon-sort-by-alphabet',
    };
    const sortIcon = availableIcons[this.sortDirection];

    return (
      <div class="text-nowrap">
        <a class="header pointer" onClick={this.handleClick}>
          {this.label == undefined ? <slot /> : this.label}
          <span class={`glyphicon ${sortIcon}`}></span>
        </a>
      </div>
    );
  }
  private handleClick = (): void => {
    this.sort.emit(this.sortKey);
  };
}
