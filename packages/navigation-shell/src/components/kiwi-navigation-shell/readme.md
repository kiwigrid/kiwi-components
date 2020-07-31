# kiwi-navigation-shell



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute | Description | Type                                                                                                                | Default       |
| --------------------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------- | ------------- |
| `layout`              | `layout`  |             | `"combined" \| "separated"`                                                                                         | `'separated'` |
| `routes` _(required)_ | --        |             | `{ routeKey: string; label: string; urlFactory: (data?: any) => string; handler: (data?: any) => RouteHistory; }[]` | `undefined`   |


## Dependencies

### Depends on

- [kiwi-breadcrumb](../kiwi-breadcrumb)
- [kiwi-breadcrumb-item](../kiwi-breadcrumb-item)
- [kiwi-link](../kiwi-link)

### Graph
```mermaid
graph TD;
  kiwi-navigation-shell --> kiwi-breadcrumb
  kiwi-navigation-shell --> kiwi-breadcrumb-item
  kiwi-navigation-shell --> kiwi-link
  style kiwi-navigation-shell fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
