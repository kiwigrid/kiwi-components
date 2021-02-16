import { createStore } from '@stencil/store';
import { MaybeAsync } from '../../utils/maybe-async';

// ROUTE

/**
 * The initial route configuration passed to the navigation shell component.
 * It is used to initialize the actual routes.
 */
export type RouteConfig<RouteData, ResolvedRouteData> = {
  routeKey: string;
  label: RouteLabel<RouteData & ResolvedRouteData>;
  url: RouteUrl<RouteData & ResolvedRouteData>;
  handler: RouteHandler<RouteData & ResolvedRouteData>;
  resolver?: RouteDataResolver<RouteData, ResolvedRouteData>;
};

/**
 * The RouteHandler is a function that knows how to perform the actual
 * navigation operation and returns a routes history, which can be seen as the
 * path to a route (normally represented by a breadcrumb in the UI).
 */
interface RouteHandler<D> {
  (data: D): RouteHistory;
}

/**
 * The label describing a route (e.g. for use as link text).
 *
 * Can be either a static string (e.g. `'Show User Profile'`) or a factory function
 * that takes the data associated to a route and returns the label
 * (e.g. ```({ user }) => `Show Profile of ${user}`;```).
 */
type RouteLabel<RouteData> = string | ((data: RouteData) => string);

/**
 * The actual url of this route.
 *
 * Can be either a static string (e.g. `'/users'`) or a factory function that
 * takes the data associated to a route and returns the url (e.g.
 * ```({ userId }) => `/users/${userId}`;```).
 */
type RouteUrl<RouteData> = string | ((data: RouteData) => string);

type RouteDataResolver<RouteData, ResolvedData> = (
  data: RouteData,
) => MaybeAsync<ResolvedData>;

// ROUTE HISTORY

/**
 * The RouteHistory is a list of RouteLinks defining the path to the current
 * Route.
 * It is used to e.g. build the breadcrumb.
 */
export type RouteHistory = RouteLink[];

interface RouteLink {
  routeKey: string;
  data?: Record<string, unknown> | Promise<Record<string, unknown>>;
  label?: string;
  labelOnly?: true;
}

/**
 * Helper to find the corresponding route to a given key returning its
 * effective url, label and the onClick handler which invokes the navigation
 * handler for this route and updates the breadcrumb (aka RouteHistory).
 *
 * @param routeKey The route key
 * @param data The data associated with this route
 */
export const makeLink = async (
  routeKey: string,
  data: Record<string, unknown>,
): Promise<[url: string, label: string, onClick: (event: Event) => void]> => {
  const route = getRoute(routeKey);

  if (route == undefined) {
    throw new Error(`No handler registered for ${routeKey}`);
  }

  const resolvedData = await Promise.resolve(
    route.resolver?.(data) ?? data,
  ).then((resolved) => ({ ...data, ...resolved }));

  const label =
    typeof route.label === 'function' ? route.label(resolvedData) : route.label;

  const url =
    typeof route.url === 'string' ? route.url : route.url(resolvedData);

  return [
    url,
    label,
    (event: Event) => {
      event.preventDefault();
      state.breadcrumb = [
        ...route.handler(resolvedData),
        { routeKey, label, data, labelOnly: true },
      ];
      state.activeRoute = routeKey;
    },
  ];
};

// STORE

const { state, dispose, onChange } = createStore<{
  routes: RouteConfig<Record<string, unknown>, Record<string, unknown>>[];
  breadcrumb: RouteHistory;
  activeRoute: string;
  routeChangeListeners: ((activeRoute: string) => void)[];
}>({ routes: [], breadcrumb: [], activeRoute: '', routeChangeListeners: [] });

export { state, dispose };

export const init = (
  routes: RouteConfig<Record<string, unknown>, Record<string, unknown>>[],
  breadcrumb: RouteHistory,
  activeRoute: string,
): void => {
  state.routes = routes;
  state.breadcrumb = breadcrumb;
  state.activeRoute = activeRoute;
};

onChange('activeRoute', (activeRoute) => {
  Object.values(state.routeChangeListeners).forEach((listener) =>
    listener?.(activeRoute),
  );
});

export const getRoute = (
  key: string,
): RouteConfig<Record<string, unknown>, Record<string, unknown>> | undefined =>
  state.routes?.find((route) => route.routeKey === key);

export const hasRoute = (key: string): boolean =>
  state.routes?.some((route) => route.routeKey === key);

export const isActive = (key: string): boolean => state.activeRoute === key;

export const registerRouteChangeListener = (
  listener: (activeRoute: string) => void,
): void => {
  state.routeChangeListeners = [...state.routeChangeListeners, listener];
};

export const unregisterRouteChangeListener = (
  listener: (activeRoute: string) => void,
): void => {
  state.routeChangeListeners = state.routeChangeListeners.filter(
    (l) => l !== listener,
  );
};

export default state;
