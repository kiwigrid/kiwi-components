/* global window */

import {
  configure,
  addParameters,
  addDecorator,
  // setCustomElements,
} from '@storybook/web-components';
import { withA11y } from '@storybook/addon-a11y';
import '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs';

// import customElements from '../custom-elements.json';

// setCustomElements(customElements);

addParameters({
  docs: {
    iframeHeight: '200px',
  },
});

addDecorator(withA11y);
addDecorator(withKnobs);

// configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);

// force full reload to not reregister web components
const req = require.context('../src/components', true, /\.stories\.(js|mdx)$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
