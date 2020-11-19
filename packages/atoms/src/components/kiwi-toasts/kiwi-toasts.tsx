import { Component, Host, h, Listen, State } from '@stencil/core';
import { map } from 'lodash-es';

export interface Toast {
  title: string;
  description: string;
  type: 'info' | 'warn' | 'error' | 'success';
  timeout?: number; // 0 means no automatic disappearing
}

const DEFAULT_DURATION = 5000;

@Component({
  tag: 'kiwi-toasts',
  styleUrl: 'kiwi-toasts.css',
  shadow: false,
})
export class KiwiToasts {
  @State()
  private toasts: { [key: string]: Toast } = {};

  @Listen('kiwiToast', { target: 'document' })
  private handleKiwiToastEvent(event: CustomEvent<Toast>): void {
    const toast = event.detail;
    const key = toast.title + Date.now().toString();
    this.toasts = {
      ...this.toasts,
      [key]: toast,
    };
    if (toast.timeout !== 0) {
      window.setTimeout(() => {
        this.deleteToast(key);
      }, toast.timeout ?? DEFAULT_DURATION);
    }
  }

  private handleClose = (key: string) => (): void => {
    this.deleteToast(key);
  };

  private deleteToast(key: string): void {
    const {
      [key]: {},
      ...toasts
    } = this.toasts;
    this.toasts = toasts;
  }

  render(): JSX.Element {
    return (
      <Host class="alert-affix">
        <div class="alerts-wrapper">
          {map(this.toasts, (toast, key) => (
            <kiwi-alert
              type={toast.type}
              class="alert alert-dismissible alert-show"
            >
              <button
                type="button"
                class="close"
                aria-label="Close"
                onClick={this.handleClose(key)}
              >
                <span aria-hidden="true">×</span>
              </button>
              <strong>{toast.title}</strong>
              <p>{toast.description}</p>
            </kiwi-alert>
          ))}
        </div>
      </Host>
    );
  }
}
