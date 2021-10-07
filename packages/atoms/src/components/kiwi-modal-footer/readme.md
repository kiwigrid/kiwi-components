# kiwi-modal-footer

## Usage

### Default Labels

```typescriptreact
<kiwi-modal-footer
    onConfirm={() => /* confirm action*/}
    onCancel={() => /* cancel action*/}
/>
```

### Custom Labels

```typescriptreact
<kiwi-modal-footer
    defaultLabels={['Yes', 'Of course']}
    onConfirm={() => /* confirm action*/}
    onCancel={() => /* cancel action*/}
/>
```

### Custom Content For Default Buttons

```typescriptreact
<kiwi-modal-footer
    onConfirm={() => /* confirm action*/}
    onCancel={() => /* cancel action*/}
>
    <span slot="kiwi-modal-footer-confirm">…</span>
    <span slot="kiwi-modal-footer-cancel">…</span>
</kiwi-modal-footer>
```

### Custom Footer

```typescriptreact
<kiwi-modal-footer
    useDefault={false}
    onConfirm={() => /* confirm action*/}
    onCancel={() => /* cancel action*/}
>
    <button>Don't click me!</button>
</kiwi-modal-footer>
```

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute     | Description                                                                                                                                                             | Type                                | Default            |
| --------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------ |
| `defaultLabels` | --            | The labels to be used for the default footer buttons, passed as a tuple of strings with the first entry being the confirm label, and the second being the cancel label. | `[confirm: string, cancel: string]` | `['Ok', 'Cancel']` |
| `useDefault`    | `use-default` | Whether to render the default footer buttons or a slot.  This is a workaround since slot fallback content is not rendered correctly with `shadow: false`                | `boolean`                           | `true`             |


## Events

| Event     | Description                                                        | Type               |
| --------- | ------------------------------------------------------------------ | ------------------ |
| `cancel`  | The event emitted when the user clicks the default cancel button.  | `CustomEvent<any>` |
| `confirm` | The event emitted when the user clicks the default confirm button. | `CustomEvent<any>` |


## Slots

| Slot                          | Description                                 |
| ----------------------------- | ------------------------------------------- |
| `"kiwi-modal-footer-cancel"`  | The content for the default cancel button.  |
| `"kiwi-modal-footer-confirm"` | The content for the default confirm button. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
