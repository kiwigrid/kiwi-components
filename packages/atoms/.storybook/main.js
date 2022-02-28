module.exports = {
  stories: [
    '../src/components/**/*.stories.@(j|t)s',
    '../www/**/*.stories.@(j|t)s', // so that storybook reloads after stencil finished reloading
  ],
  staticDirs: ['../www'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: { backgrounds: false, docs: true },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
  ],
};
