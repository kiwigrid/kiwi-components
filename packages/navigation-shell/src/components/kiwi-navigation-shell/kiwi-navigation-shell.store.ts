import { createStore } from '@stencil/store';

// TYPES

interface RouteLink {
  label: string;
  to?: { key: string; data?: any };
}
export type RouteHistory = RouteLink[];
export interface RouteHandler<D> {
  (data: D): RouteHistory;
}

export interface RouteDefinition<Key extends string, RouteData extends any>
  extends RouteHandler<RouteData> {
  label: string | ((data: RouteData) => string);
  url: (data: RouteData) => string;
  key: Key;
}

// STORE

const { state } = createStore<{
  routes: RouteDefinition<any, any>[];
  breadcrumb: RouteHistory;
}>({ routes: [], breadcrumb: [] });

export const init = (
  routes: RouteDefinition<any, any>[],
  breadcrumb: RouteHistory,
): void => {
  state.routes = routes;
  state.breadcrumb = breadcrumb;
};

export const handle = <Key extends string, RouteData>(
  key: Key,
  label: string | ((data: RouteData) => string),
  handler: RouteHandler<RouteData>,
  url: (data: RouteData) => string,
): RouteDefinition<Key, RouteData> =>
  Object.assign(handler, { key, label, url });

export const makeLink = <Key extends string, RouteData>(
  key: Key,
  data?: RouteData,
): [string, (event: MouseEvent) => void] => {
  const routeHandler = state.routes.find((handler) => handler.key === key);

  if (routeHandler == undefined) {
    throw new Error(`No handler registered for ${key}`);
  }

  console.log('found route handler', { routeHandler });

  const label =
    typeof routeHandler.label === 'string'
      ? routeHandler.label
      : routeHandler.label(data);

  return [
    routeHandler.url(data),
    (event: MouseEvent) => {
      event.preventDefault();
      state.breadcrumb = [...routeHandler(data), { label }];
    },
  ];
};

export const getRoute = <Key extends string, RouteData extends any>(
  key: Key,
): RouteDefinition<Key, RouteData> | undefined =>
  state.routes?.find((route) => route.key === key);

export const hasRoute = (key: string): boolean =>
  state.routes?.some((route) => route.key === key);

export default state;
