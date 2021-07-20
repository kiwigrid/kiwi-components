# kiwi-modal

To show the modal there are two options:

- set the attribute `open` of the component
- dispatch a CustomEvent with name `showKiwiModal` and payload `{detail: ${modalId}}` where `modalId` is the id that you gave the component

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                                                                                                          | Type                             | Default     |
| ------------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| `cancelText` | `cancel-text` | Set this text to show the cancel button, remember to set "withFooter" to show the cancel button                                                      | `string \| undefined`            | `undefined` |
| `escape`     | `escape`      | Set to true if the modal should be closed on Escape press                                                                                            | `boolean \| undefined`           | `false`     |
| `okText`     | `ok-text`     | Sets the text of the ok button, remember to set "withFooter" to show the ok button                                                                   | `string \| undefined`            | `'Ok'`      |
| `open`       | `open`        | Set this to true to show the modal or alternatively set an id to this element and dispatch a 'showKiwiModal' CustomEvent with the id as event.detail | `boolean \| undefined`           | `false`     |
| `size`       | `size`        | Set the size of the modal                                                                                                                            | `"large" \| "medium" \| "small"` | `'medium'`  |
| `withFooter` | `with-footer` | Set this to true if you want to show the footer                                                                                                      | `boolean \| undefined`           | `false`     |
| `withHeader` | `with-header` | Set this to true if you want to show the header                                                                                                      | `boolean \| undefined`           | `false`     |


## Events

| Event       | Description | Type               |
| ----------- | ----------- | ------------------ |
| `closed`    |             | `CustomEvent<any>` |
| `confirmed` |             | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
