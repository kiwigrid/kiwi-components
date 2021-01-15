/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { RouteConfig, RouteHistory } from "./components/kiwi-navigation-shell/kiwi-navigation-shell.store";
export namespace Components {
    interface KiwiNavigationShell {
        /**
          * Initial breadcrumb.
          * @example [   {     label: 'Categories',     to: { key: 'categories' },   },   {     label: 'Household & Kitchen',     to: { key: 'products', data: { categoryId: 'household+kitchen' } },   },   {     label: 'Nicer Dicer',   }, ]
         */
        "breadcrumb": RouteHistory;
        /**
          * Array of route configuration.
          * @example [   {     routeKey: 'home',     label: 'Home',     url: '/home',     handler: () => {       location.href = '/home';        return [];     },   } ]
         */
        "routes": RouteConfig<Record<string, unknown>>[];
    }
    interface KiwiShellBreadcrumb {
    }
    interface KiwiShellLink {
        /**
          * Additional css to be applied to the underlying `a` element.
         */
        "customClass"?: string;
        /**
          * Data associated to this route.
         */
        "routeData": Record<string, unknown>;
        /**
          * The key of the route config this link should be built off of.
         */
        "routeKey": string;
    }
}
declare global {
    interface HTMLKiwiNavigationShellElement extends Components.KiwiNavigationShell, HTMLStencilElement {
    }
    var HTMLKiwiNavigationShellElement: {
        prototype: HTMLKiwiNavigationShellElement;
        new (): HTMLKiwiNavigationShellElement;
    };
    interface HTMLKiwiShellBreadcrumbElement extends Components.KiwiShellBreadcrumb, HTMLStencilElement {
    }
    var HTMLKiwiShellBreadcrumbElement: {
        prototype: HTMLKiwiShellBreadcrumbElement;
        new (): HTMLKiwiShellBreadcrumbElement;
    };
    interface HTMLKiwiShellLinkElement extends Components.KiwiShellLink, HTMLStencilElement {
    }
    var HTMLKiwiShellLinkElement: {
        prototype: HTMLKiwiShellLinkElement;
        new (): HTMLKiwiShellLinkElement;
    };
    interface HTMLElementTagNameMap {
        "kiwi-navigation-shell": HTMLKiwiNavigationShellElement;
        "kiwi-shell-breadcrumb": HTMLKiwiShellBreadcrumbElement;
        "kiwi-shell-link": HTMLKiwiShellLinkElement;
    }
}
declare namespace LocalJSX {
    interface KiwiNavigationShell {
        /**
          * Initial breadcrumb.
          * @example [   {     label: 'Categories',     to: { key: 'categories' },   },   {     label: 'Household & Kitchen',     to: { key: 'products', data: { categoryId: 'household+kitchen' } },   },   {     label: 'Nicer Dicer',   }, ]
         */
        "breadcrumb"?: RouteHistory;
        /**
          * Array of route configuration.
          * @example [   {     routeKey: 'home',     label: 'Home',     url: '/home',     handler: () => {       location.href = '/home';        return [];     },   } ]
         */
        "routes": RouteConfig<Record<string, unknown>>[];
    }
    interface KiwiShellBreadcrumb {
    }
    interface KiwiShellLink {
        /**
          * Additional css to be applied to the underlying `a` element.
         */
        "customClass"?: string;
        /**
          * Data associated to this route.
         */
        "routeData"?: Record<string, unknown>;
        /**
          * The key of the route config this link should be built off of.
         */
        "routeKey": string;
    }
    interface IntrinsicElements {
        "kiwi-navigation-shell": KiwiNavigationShell;
        "kiwi-shell-breadcrumb": KiwiShellBreadcrumb;
        "kiwi-shell-link": KiwiShellLink;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "kiwi-navigation-shell": LocalJSX.KiwiNavigationShell & JSXBase.HTMLAttributes<HTMLKiwiNavigationShellElement>;
            "kiwi-shell-breadcrumb": LocalJSX.KiwiShellBreadcrumb & JSXBase.HTMLAttributes<HTMLKiwiShellBreadcrumbElement>;
            "kiwi-shell-link": LocalJSX.KiwiShellLink & JSXBase.HTMLAttributes<HTMLKiwiShellLinkElement>;
        }
    }
}
