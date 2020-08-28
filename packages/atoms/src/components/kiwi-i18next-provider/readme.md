# kiwi-i18next-provider



<!-- Auto Generated Below -->


## Properties

| Property                    | Attribute        | Description                                  | Type       | Default      |
| --------------------------- | ---------------- | -------------------------------------------- | ---------- | ------------ |
| `lng`                       | `lng`            | The language to use for i18n. en as default. | `string`   | `'en'`       |
| `loadBasePath` _(required)_ | `load-base-path` | Base path used to configure i18next backend. | `string`   | `undefined`  |
| `ns`                        | --               | Namespaces to be loaded by i18next           | `string[]` | `['common']` |


## Events

| Event              | Description                                                                                | Type                     |
| ------------------ | ------------------------------------------------------------------------------------------ | ------------------------ |
| `tFunctionChanged` | This event is dispatched when i18nexts t function changes The t function is passed as data | `CustomEvent<TFunction>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
