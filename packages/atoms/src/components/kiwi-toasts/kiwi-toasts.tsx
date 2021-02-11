import { Component, h, Host, Listen, State } from '@stencil/core';
import { reject } from 'lodash-es';

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
  private toasts: (Toast & { key: string })[] = [];

  @Listen('kiwiToast', { target: 'document' })
  handleKiwiToastEvent(event: CustomEvent<Toast>): void {
    const toast = event.detail;
    const key = toast.title + Date.now().toString();
    this.toasts = [...this.toasts, { ...toast, key: key }];

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
    this.toasts = reject(this.toasts, { key });
  }

  render(): JSX.Element {
    return (
      <Host>
        {this.toasts.map((toast) => (
          <kiwi-alert
            type={toast.type}
            class="alert alert-dismissible alert-show"
            key={toast.key}
          >
            <button
              type="button"
              class="close"
              aria-label="Close"
              onClick={this.handleClose(toast.key)}
            >
              <span aria-hidden="true">×</span>
            </button>
            <strong>{toast.title}</strong>
            <p>{toast.description}</p>
          </kiwi-alert>
        ))}
      </Host>
    );
  }
}
