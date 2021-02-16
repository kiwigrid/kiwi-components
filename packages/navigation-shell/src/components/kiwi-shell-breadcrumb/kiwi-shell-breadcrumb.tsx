import { Component, h } from '@stencil/core';
import state from '../kiwi-navigation-shell/kiwi-navigation-shell.store';

@Component({
  tag: 'kiwi-shell-breadcrumb',
  shadow: false,
})
export class KiwiShellBreadcrumb {
  render(): JSX.Element | null {
    if (state.breadcrumb.length === 0) {
      return null;
    }

    return (
      <kiwi-breadcrumb>
        {state.breadcrumb.map((crumb) => {
          const { routeKey, data, label, labelOnly } = crumb ?? {};

          return (
            <kiwi-breadcrumb-item key={`kiwi-breadrumb-item-${routeKey}`}>
              {label !== undefined ? (
                <kiwi-shell-link
                  routeKey={routeKey}
                  routeData={data}
                  labelOnly={labelOnly}
                >
                  <span slot="kiwi-shell-link-content">{label}</span>
                </kiwi-shell-link>
              ) : (
                <kiwi-shell-link
                  routeKey={routeKey}
                  routeData={data}
                  labelOnly={labelOnly}
                />
              )}
            </kiwi-breadcrumb-item>
          );
        })}
      </kiwi-breadcrumb>
    );
  }
}
