import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import state, {
  RouteHistory,
  init,
  handle,
} from './kiwi-navigation-shell.store';

@Component({
  tag: 'kiwi-navigation-shell',
  styleUrl: 'kiwi-navigation-shell.css',
  shadow: false,
})
export class KiwiNavigationShell implements ComponentInterface {
  @Prop()
  public routes!: {
    routeKey: string;
    label: string;
    url: (data?: any) => string;
    handler: (data?: any) => RouteHistory;
  }[];

  @Prop()
  public breadcrumb: RouteHistory = [];

  @Prop()
  public layout: 'combined' | 'separated' = 'separated';

  componentWillLoad(): void {
    console.log('registering', { routes: this.routes });
    init(
      this.routes?.map(({ routeKey, url, handler, label }) =>
        handle(routeKey, label, handler, url),
      ),
      this.breadcrumb,
    );
  }
  render() {
    console.log('rendering');
    console.log(state.breadcrumb);
    return (
      <Host>
        <div class="row">
          <div class="col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                {state.breadcrumb.length > 0 ? (
                  <kiwi-breadcrumb>
                    {state.breadcrumb.map((crumb) => {
                      const { key, data } = crumb.to ?? {};
                      return (
                        <kiwi-breadcrumb-item key={key}>
                          {key ? (
                            <kiwi-shell-link routeKey={key} routeData={data}>
                              {crumb.label}
                            </kiwi-shell-link>
                          ) : (
                            crumb.label
                          )}
                        </kiwi-breadcrumb-item>
                      );
                    })}
                  </kiwi-breadcrumb>
                ) : (
                  <span class="glyphicon glyphicon-home"></span>
                )}
              </div>
              <div class="panel-body">
                <slot name="heading"></slot>
                {this.layout === 'combined' && <slot name="outlet"></slot>}
              </div>
            </div>
          </div>
        </div>
        {this.layout === 'separated' && <slot name="outlet"></slot>}
      </Host>
    );
  }
}
