import { Placement } from '@popperjs/core/lib';
import arrowModifier from '@popperjs/core/lib/modifiers/arrow';
import computeStylesModifier from '@popperjs/core/lib/modifiers/computeStyles';
import offsetModifier from '@popperjs/core/lib/modifiers/offset';
import preventOverflowModifier from '@popperjs/core/lib/modifiers/preventOverflow';
import { createPopper } from '@popperjs/core/lib/popper-lite';
import { Instance, Modifier } from '@popperjs/core/lib/types';
import {
  Component,
  ComponentInterface,
  h,
  Host,
  JSX,
  Prop,
  State,
} from '@stencil/core';
import { merge } from 'lodash-es';

const MODIFIERS: {
  arrow: typeof arrowModifier;
  offset: typeof offsetModifier;
  preventOverflow: typeof preventOverflowModifier;
  computeStyles: typeof computeStylesModifier;
} = {
  arrow: arrowModifier,
  // eslint-disable-next-line @stencil/ban-side-effects
  offset: merge(offsetModifier, {
    options: {
      offset: [-10, 10],
    },
  }),
  // eslint-disable-next-line @stencil/ban-side-effects
  preventOverflow: merge(preventOverflowModifier, {
    options: {
      rootBoundary: 'viewport',
    },
  }),
  // eslint-disable-next-line @stencil/ban-side-effects
  computeStyles: merge(computeStylesModifier, {
    options: {
      adaptive: false,
    },
  }),
};

/**
 * @slot popover-ref - The reference element (aka trigger) for the popover.
 * @slot popover-title - The title of the popover. Remember to set `showTitle` to true.
 * @slot popover-content - The popovers content.
 */
@Component({
  tag: 'kiwi-popover',
  styleUrl: 'kiwi-popover.css',
  shadow: false,
})
export class KiwiPopover implements ComponentInterface {
  /** Show or hide the popover title. */
  @Prop()
  showTitle = false;

  /** Placement of the tooltip. */
  @Prop()
  placement: Placement = 'auto';

  /** The minimum width of the popover. */
  @Prop()
  minWidth = '150px';

  /** The maximum width of the popover. */
  @Prop()
  maxWidth = '300px';

  /**
   * Popper.js modifiers options.
   * See https://popper.js.org/popper-documentation.html#modifiers
   */
  @Prop()
  modifiers: Modifier<unknown>[] = [];

  @State()
  placedAt?: string;

  private reference?: Element;
  private content?: HTMLElement;
  private popperInst?: Instance;

  componentDidLoad(): void {
    this.popperInst = createPopper(
      this.reference as Element,
      this.content as HTMLElement,
      {
        placement: this.placement,
        modifiers: [
          MODIFIERS.arrow,
          MODIFIERS.offset,
          MODIFIERS.preventOverflow,
          MODIFIERS.computeStyles,
          ...this.modifiers,
          {
            name: 'updatePlacement',
            enabled: true,
            phase: 'afterWrite',
            fn: this.handlePopoverUpdate,
          },
          {
            name: 'preventOverflow',
            options: {
              altBoundary: true,
            },
          },
        ],
        strategy: 'fixed',
        onFirstUpdate: this.handlePopoverUpdate,
      },
    );
  }

  render(): JSX.Element {
    return (
      <Host>
        <div
          ref={(el) => (this.reference = el)}
          aria-describedby="kiwi-popper-content"
          onMouseEnter={this.handleShowPopover}
          onMouseLeave={this.handleHidePopover}
        >
          <slot name="popover-ref"></slot>
        </div>

        <div
          class={{
            popover: true,
            fade: true,
            [this.placedAt ?? '']: true,
            'm-0': true,
          }}
          style={{
            display: 'inherit',
            minWidth: this.minWidth,
            maxWidth: this.maxWidth,
          }}
          ref={(el) => (this.content = el)}
          id="kiwi-popper-content"
          role="tooltip"
        >
          <div class="arrow m-0" data-popper-arrow></div>
          {this.showTitle && (
            <div class="popover-title">
              <slot name="popover-title" />
            </div>
          )}
          <div class="popover-content">
            <slot name="popover-content" />
          </div>
        </div>
      </Host>
    );
  }

  private handleShowPopover = (): void => {
    this.content?.classList.add('in');
    this.popperInst?.update();
  };

  private handleHidePopover = (): void => {
    this.content?.classList.remove('in');
  };

  private handlePopoverUpdate = (): void => {
    if (this.placedAt !== this.popperInst?.state.placement) {
      this.placedAt = this.popperInst?.state.placement;
    }
  };
}
