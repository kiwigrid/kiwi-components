import {
  Component,
  ComponentInterface,
  h,
  Host,
  JSX,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'kiwi-loading',
  shadow: false,
})
export class KiwiLoading implements ComponentInterface {
  /**
   * Indicates the loading state.
   */
  @Prop({ reflect: true })
  loading = true;

  /**
   * The label of the loading spinner.
   */
  @Prop()
  text!: string;

  render(): JSX.Element {
    return (
      this.loading && (
        <Host class="text-info">
          <div class="loading-spinner pull-left mr-xs-1">
            <div class="spinner small inline-block" />
          </div>
          <span>{this.text}</span>
        </Host>
      )
    );
  }
}
