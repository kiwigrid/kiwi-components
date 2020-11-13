# Kiwi-Atoms

This package is a conglomeration of web components built with stencil which wrap some of our library.bootstrap "css components".

## Setup & Running

To setup and run this package run

```bash
npm install
npm run start
```

which installs all dependencies and runs development servers for stencil and storybook.

You can also run stencil and storybook in separate terminal instances with the commands

```bash
npm run start:stencil
npm run start:storybook
```

Storybook is a presentation ui and developing tool to easily test and manage web components.

### More themes for the theme switcher

Out of the box the themeswitcher only knows about our kiwigrid theme.
To let it know about other variants create a file named `local-themes.json` in the `.storybook` folder.

This file has to contain an array of objects and can look like this:

```json
[{ "value": "kiwigrid", "title": "Kiwigrid" }]
```
