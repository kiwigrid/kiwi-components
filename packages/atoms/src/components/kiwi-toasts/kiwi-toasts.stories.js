import { html } from 'lit-html';
import notes from './readme.md';

export default {
  title: 'KiwiComponents/Toasts',
  parameters: { docs: { description: { component: notes } } },
  decorators: [],
};

export const basic = () => {
  window.setTimeout(() => {
    document.dispatchEvent(
      new CustomEvent('kiwiToast', {
        detail: {
          title: 'SUCCESS',
          description: 'This message will self-destruct after 10 seconds',
          type: 'success',
          timeout: 10000,
        },
      }),
    );
    document.dispatchEvent(
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
  }, 100 /* so they definitely show up */);
  window.setTimeout(() => {
    document.dispatchEvent(
      new CustomEvent('kiwiToast', {
        detail: {
          title: 'SUCCESS',
          description:
            'This message should have appeared after 5 seconds and will self-destruct after 10 seconds',
          type: 'success',
          timeout: 10000,
        },
      }),
    );
  }, 5000);

  return html`<kiwi-toasts />`;
};
