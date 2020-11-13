import { Component, ComponentInterface, h, JSX, Prop } from '@stencil/core';

export type Size = 'small' | 'medium' | 'large';

const SIZES: { [Key in Size]: string } = {
  small: '150%',
  medium: '300%',
  large: '600%',
};

@Component({
  tag: 'kiwi-empty',
  shadow: false,
})
export class KiwiEmpty implements ComponentInterface {
  /**
   * Show optional content below the icon.
   */
  @Prop()
  withContent = false;

  /**
   * The size of the icon.
   */
  @Prop()
  size: Size = 'large';

  /**
   * The name of the glyphicon icon to use.
   * So if you want to render a `glyphicon-ok` pass `ok` as the name.
   */
  @Prop()
  glyphicon = 'inbox';

  /**
   * Provide a custom class to use instead of glyphicons.
   */
  @Prop()
  icon?: string;

  /** Additional css class to apply to the container. */
  @Prop()
  containerClass = '';

  render(): JSX.Element {
    const iconClass = this.icon
      ? this.icon
      : `glyphicon glyphicon-${this.glyphicon}`;
    return (
      <div
        class={`text-center mt-3 ${this.containerClass}`}
        style={{ color: '#9d9d9d' }}
      >
        <span class={iconClass} style={{ fontSize: SIZES[this.size] }}></span>
        {this.withContent && (
          <p class="mt-2">
            <slot />
          </p>
        )}
      </div>
    );
  }
}
