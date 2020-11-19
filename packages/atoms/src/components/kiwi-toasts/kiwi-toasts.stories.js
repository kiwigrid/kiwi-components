import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/Toasts',
  parameters: { docs: { description: { component: notes } } },
  decorators: [],
};

export const basic = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const toastsElement = document.querySelector('kiwi-toasts');
    toastsElement.dispatchEvent(
      new CustomEvent('kiwiToast', {
        detail: {
          title: 'SUCCESS',
          description: 'This message will self-destruct after 5 seconds',
          type: 'success',
          timeout: 5000,
        },
      }),
    );
    toastsElement.dispatchEvent(
      new CustomEvent('kiwiToast', {
        detail: {
          title: 'ERROR',
          description:
            'This message will stay here until you click the little x',
          type: 'error',
          timeout: 0,
        },
      }),
    );
  });
  return html`<kiwi-toasts />`;
};
