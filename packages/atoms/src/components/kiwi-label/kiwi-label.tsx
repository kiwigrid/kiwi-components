import { Component, ComponentInterface, h, JSX, Prop } from '@stencil/core';
import { invert, stubTrue, mapValues } from 'lodash-es';

export type LabelKind = 'default' | 'info' | 'success' | 'warning' | 'danger';

const LABEL_CLASSES: { [Key in LabelKind]: string } = {
  default: 'label-default',
  info: 'label-info',
  success: 'label-success',
  warning: 'label-warning',
  danger: 'label-danger',
};

@Component({
  tag: 'kiwi-label',
})
export class KiwiLabel implements ComponentInterface {
  /** Kind of label */
  @Prop()
  kind!: LabelKind;

  /** Additional classes to apply to the label. */
  @Prop()
  classes: string[] = [];

  render(): JSX.Element {
    const labelClass = LABEL_CLASSES[this.kind] || LABEL_CLASSES['default'];
    const classes = mapValues(
      invert([...this.classes, labelClass, 'label']),
      stubTrue,
    );
    return (
      <span class={classes}>
        <slot></slot>
      </span>
    );
  }
}
