# kiwi-modal

To show the modal there are two options:

- set the attribute `open` of the component
- dispatch a CustomEvent with name `showKiwiModal` and payload `{detail: ${modalId}}` where `modalId` is the id that you gave the component

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                                                                                                          | Type                             | Default    |
| ------------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| `escape`     | `escape`      | Set to true if the modal should be closed on Escape press                                                                                            | `boolean`                        | `false`    |
| `open`       | `open`        | Set this to true to show the modal or alternatively set an id to this element and dispatch a 'showKiwiModal' CustomEvent with the id as event.detail | `boolean`                        | `false`    |
| `size`       | `size`        | Set the size of the modal                                                                                                                            | `"large" \| "medium" \| "small"` | `'medium'` |
| `withHeader` | `with-header` | Set this to true if you want to show the header                                                                                                      | `boolean`                        | `false`    |


## Events

| Event   | Description                                      | Type               |
| ------- | ------------------------------------------------ | ------------------ |
| `close` | This event is emitted after the modal was closed | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
