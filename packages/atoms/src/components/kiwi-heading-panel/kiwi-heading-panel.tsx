import {
  Component,
  FunctionalComponent,
  h,
  Host,
  JSX,
  Prop,
} from '@stencil/core';

type Slots = {
  [Key in
    | 'primary'
    | 'secondary'
    | 'top'
    | 'left'
    | 'right']: `kiwi-heading-${Key}`;
};

const slots: Slots = {
  primary: 'kiwi-heading-primary',
  secondary: 'kiwi-heading-secondary',
  left: 'kiwi-heading-left',
  right: 'kiwi-heading-right',
  top: 'kiwi-heading-top',
};

/**
 * @slot primary - Content for primary heading.
 * @slot secondary - Optional secondary heading.
 * @slot top - Optional content to be displayed above the primary heading, e.g. a breadcrumb
 * @slot left - Optional content to be displayed left of the primary heading, e.g. an icon
 * @slot right - Optional content to be displayed right, e.g. navigation
 */
@Component({
  tag: 'kiwi-heading-panel',
  styleUrl: 'kiwi-heading-panel.css',
  shadow: false,
})
export class KiwiHeadingPanel {
  /** Show slot `kiwi-heading-secondary`. */
  @Prop()
  public withSecondary = false;

  /** Show slot `kiwi-heading-top`. */
  @Prop()
  public withTop = false;

  /** Show slot `kiwi-heading-left`. */
  @Prop()
  public withLeft = false;

  /** Show slot `kiwi-heading-right`. */
  @Prop()
  public withRight = false;

  render(): JSX.Element {
    return (
      <Host class="panel panel-default">
        <div class="panel-heading py-2" hidden={!this.withTop}>
          <KiwiHeadingSlot name="top" />
        </div>

        <div class="panel-body d-flex align-items-center">
          <KiwiHeadingSlot
            name="left"
            hidden={!this.withLeft}
            classes={{
              'align-self-start': this.withSecondary,
              'mt-1': this.withSecondary,
              'mr-2': true,
            }}
          />

          <h1 class="h2 m-0" style={{ flex: '1 0 auto' }}>
            <KiwiHeadingSlot name="primary" />
            <div class="mt-1" hidden={!this.withSecondary}>
              <small>
                <KiwiHeadingSlot name="secondary" />
              </small>
            </div>
          </h1>

          <KiwiHeadingSlot name="right" hidden={!this.withRight} />
        </div>
      </Host>
    );
  }
}

const KiwiHeadingSlot: FunctionalComponent<{
  name: keyof Slots;
  hidden?: boolean;
  classes?: string | Record<string, boolean>;
}> = ({ name, hidden, classes = {} }) => (
  <div hidden={hidden} key={name} class={classes}>
    <slot name={slots[name]} />
  </div>
);
