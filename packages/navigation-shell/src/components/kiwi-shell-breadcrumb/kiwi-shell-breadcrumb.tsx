import { Component, h } from '@stencil/core';
import state from '../kiwi-navigation-shell/kiwi-navigation-shell.store';

@Component({
  tag: 'kiwi-shell-breadcrumb',
  shadow: false,
})
export class KiwiShellBreadcrumb {
  render(): JSX.Element {
    return state.breadcrumb.length > 0 ? (
      <kiwi-breadcrumb>
        {state.breadcrumb.map((crumb) => {
          const { key, data } = crumb.to ?? {};

          return (
            <kiwi-breadcrumb-item key={key}>
              {key ? (
                crumb.label ? (
                  <kiwi-shell-link routeKey={key} routeData={data}>
                    {crumb.label}
                  </kiwi-shell-link>
                ) : (
                  <kiwi-shell-link routeKey={key} routeData={data} />
                )
              ) : (
                crumb.label
              )}
            </kiwi-breadcrumb-item>
          );
        })}
      </kiwi-breadcrumb>
    ) : (
      <slot></slot>
    );
  }
}
