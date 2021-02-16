# kiwi-navigation-shell

## Usage

```jsx
<kiwi-navigation-shell
  routes={{[
    {
      routeKey: 'home',
      label: 'Home',
      url: '/home',
      handler: () => {
        location.href = '/home';

        return [];
      }
    },
    {
      routeKey: 'users',
      label: 'Users',
      url: '/users',
      handler: () => {
        location.href = '/users';

        return [];
      }
    },
    {
      routeKey: 'userProfile',
      label: ({ username }) => `Profile of ${username}`,
      url: ({ username }) => `/users/${username}/profile`,
      handler: ({ username }) => {
        location.href = `/users/${username}/profile`

        // You can define the parents of this route (this route exclusive) here if you want to use the breadcrumb. The current route will be appended automatically.
        return [{ to: { key: 'users' } }]
      }
    },
  ]}}

  // You have to define where you are starting from if you want to use the breadcrumb. You can skip it otherwise.
  breadcrumb={{[

    // assuming we are at `/home` this could look like so (note that if you don't specify the `to` property just the label is rendered, without a link)
    { label: 'Home' } // Will render just 'Home'

    // assuming we are at `/users/johndoe/profile` this could look like so
    { label: 'Users', to: { key: 'users' } }, // Will render link to users
    { label: 'Profile of johndoe' } // Will render label 'Profile of johndoe'
    // resulting in 'Users >> Profile of johndoe'
  ]}}
>
{/** App */}
</kiwi-navigation-shell>
```

Related:

* [Shell Link](../kiwi-shell-link/readme.md)
* [Breadcrumb](../kiwi-shell-breadcrumb/readme.md)

<!-- Auto Generated Below -->


## Properties

| Property              | Attribute      | Description                   | Type                                                              | Default     |
| --------------------- | -------------- | ----------------------------- | ----------------------------------------------------------------- | ----------- |
| `activeRoute`         | `active-route` | Initial active route.         | `string`                                                          | `''`        |
| `breadcrumb`          | --             | Initial breadcrumb.           | `RouteLink[]`                                                     | `[]`        |
| `routes` _(required)_ | --             | Array of route configuration. | `RouteConfig<Record<string, unknown>, Record<string, unknown>>[]` | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
