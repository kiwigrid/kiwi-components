# kiwi-sortable-label



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute        | Description                       | Type                       | Default     |
| ---------------------- | ---------------- | --------------------------------- | -------------------------- | ----------- |
| `label`                | `label`          | The label to be displayed.        | `string \| undefined`      | `undefined` |
| `sortDirection`        | `sort-direction` | The initial sort direction.       | `"asc" \| "desc" \| "off"` | `'off'`     |
| `sortKey` _(required)_ | `sort-key`       | The key to be sent by sort event. | `string`                   | `undefined` |


## Events

| Event  | Description                              | Type                  |
| ------ | ---------------------------------------- | --------------------- |
| `sort` | Sort event sent when clicked on a label. | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
