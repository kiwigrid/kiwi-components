# kiwi-popover



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                | Type                                                                                                                                                                                                         | Default   |
| ----------- | ------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| `maxWidth`  | `max-width`  | The maximum width of the popover.                                                          | `string`                                                                                                                                                                                                     | `'300px'` |
| `minWidth`  | `min-width`  | The minimum width of the popover.                                                          | `string`                                                                                                                                                                                                     | `'150px'` |
| `modifiers` | --           | Popper.js modifiers options. See https://popper.js.org/popper-documentation.html#modifiers | `Modifier<unknown>[]`                                                                                                                                                                                        | `[]`      |
| `placement` | `placement`  | Placement of the tooltip.                                                                  | `"auto" \| "auto-end" \| "auto-start" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'auto'`  |
| `showTitle` | `show-title` | Show or hide the popover title.                                                            | `boolean`                                                                                                                                                                                                    | `false`   |


## Slots

| Slot                | Description                                                    |
| ------------------- | -------------------------------------------------------------- |
| `"popover-content"` | The popovers content.                                          |
| `"popover-ref"`     | The reference element (aka trigger) for the popover.           |
| `"popover-title"`   | The title of the popover. Remember to set `showTitle` to true. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
