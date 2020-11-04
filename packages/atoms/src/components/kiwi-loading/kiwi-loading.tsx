import { Component, ComponentInterface, h, JSX, Prop } from '@stencil/core';

@Component({
  tag: 'kiwi-loading',
  styleUrl: 'kiwi-loading.css',
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
        <div>
          <div class="text-info">
            <div class="loading-spinner pull-left mr-xs-1">
              <div class="spinner small inline-block" />
            </div>
            <span>{this.text}</span>
          </div>
        </div>
      )
    );
  }
}
