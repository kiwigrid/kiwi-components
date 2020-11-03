module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: { backgrounds: false, docs: true },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
  ],
};
