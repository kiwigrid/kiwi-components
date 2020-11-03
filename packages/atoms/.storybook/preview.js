/* global window */
let themes;
try {
  themes = require('./local-themes.json');
} catch (error) {
  themes = [];
}

export const parameters = {
  controls: { hideNoControlsWarning: true },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Change the lib.bootstrap theme',
    defaultValue: 'kiwigrid',
    toolbar: {
      icon: 'category',
      items: [{ value: 'kiwigrid', title: 'Kiwigrid' }, ...themes],
    },
  },
};

export const decorators = [
  (storyFn, context) => {
    const theme = context.globals.theme;
    const version = '7.28.0';
    const cssLinkElement = window.document.querySelector(
      'link[href^="https://storage.googleapis.com/library-bootstrap/files"]',
    );
    cssLinkElement.href = `https://storage.googleapis.com/library-bootstrap/files/${version}/${theme}/theme.min.css`;
    return storyFn();
  },
];
