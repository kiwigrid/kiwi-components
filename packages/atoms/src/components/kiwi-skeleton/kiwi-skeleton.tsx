import {
  Component,
  ComponentInterface,
  h,
  JSX,
  Prop,
  FunctionalComponent,
} from '@stencil/core';
import { range } from 'lodash-es';

@Component({
  tag: 'kiwi-skeleton',
  styleUrl: 'kiwi-skeleton.css',
  shadow: false,
})
export class KiwiSkeleton implements ComponentInterface {
  /**
   * Number of skeleton rows.
   */
  @Prop()
  rows = 4;

  /**
   * The kind of element this skeleton should represent.
   */
  @Prop()
  type: 'paragraph' | 'table' = 'paragraph';

  render(): JSX.Element {
    switch (this.type) {
      case 'paragraph':
        return <Paragraph rows={this.rows} />;
      case 'table':
        return <Table rows={this.rows} />;
    }
  }
}

const Paragraph: FunctionalComponent<{ rows: number }> = ({ rows }) => (
  <div class="loading-skeleton paragraph">
    <h3></h3>
    <ul class="list-unstyled">
      {range(0, rows).map(() => (
        <li></li>
      ))}
    </ul>
  </div>
);

const Table: FunctionalComponent<{ rows: number }> = ({ rows }) => (
  <div class="loading-skeleton table">
    <h3>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </h3>
    <ul class="list-unstyled">
      {range(0, rows).map(() => (
        <li>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </li>
      ))}
    </ul>
  </div>
);
