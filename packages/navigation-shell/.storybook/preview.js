import { setCustomElements } from '@storybook/web-components';
import customElements from '../custom-elements.json';

setCustomElements(customElements);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
