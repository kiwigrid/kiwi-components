# kiwi-pager



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute  | Description                                  | Type     | Default     |
| ---------------------- | ---------- | -------------------------------------------- | -------- | ----------- |
| `debounce`             | `debounce` | Debounce time in milliseconds (Default: 400) | `number` | `400`       |
| `ofLabel` _(required)_ | `of-label` | Translated "of" label (e.g. 3 of 10)         | `string` | `undefined` |
| `page` _(required)_    | `page`     | Zero based page number                       | `number` | `undefined` |
| `total` _(required)_   | `total`    | Total pages                                  | `number` | `undefined` |


## Events

| Event         | Description                                  | Type                             |
| ------------- | -------------------------------------------- | -------------------------------- |
| `pageChanged` | Event signaling a change of the page number. | `CustomEvent<{ page: number; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
