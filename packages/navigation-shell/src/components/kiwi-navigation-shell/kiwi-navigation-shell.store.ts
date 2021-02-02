import { createStore } from '@stencil/store';

// ROUTE

/**
 * A Route is the basic building block of the navigation shell.
 * It is identified by its key and contains the data for displaying a route as
 * a link as well as the logic for navigating to the location modeled by this
 * Route.
 */
interface Route<RouteData extends Record<string, unknown>>
  extends RouteHandler<RouteData> {
  label: RouteLabel<RouteData>;
  url: RouteUrl<RouteData>;
  key: string;
}

/**
 * The initial route configuration passed to the navigation shell component.
 * It is used to initialize the actual routes.
 */
export type RouteConfig<RouteData extends Record<string, unknown>> = {
  routeKey: string;
  label: RouteLabel<RouteData>;
  url: RouteUrl<RouteData>;
  handler: RouteHandler<RouteData>;
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

/**
 * Turns RouteConfig into a Route.
 */
const makeRoute = <RouteData extends Record<string, unknown>>({
  routeKey,
  label,
  url,
  handler,
}: RouteConfig<RouteData>): Route<RouteData> =>
  Object.assign(handler, { key: routeKey, label, url });

// ROUTE HISTORY

/**
 * The RouteHistory is a list of RouteLinks defining the path to the current
 * Route.
 * It is used to e.g. build the breadcrumb.
 */
export type RouteHistory = RouteLink[];

interface RouteLink {
  label?: string;
  to?: {
    key: string;
    data?: Record<string, unknown> | Promise<Record<string, unknown>>;
  };
}

/**
 * Helper to find the corresponding route to a given key returning its
 * effective url, label and the onClick handler which invokes the navigation
 * handler for this route and updates the breadcrumb (aka RouteHistory).
 *
 * @param key The route key
 * @param data The data associated with this route
 */
export const makeLink = <RouteData extends Record<string, unknown>>(
  key: string,
  data: RouteData,
): [url: string, label: string, onClick: (event: Event) => void] => {
  const route = getRoute(key);

  if (route == undefined) {
    throw new Error(`No handler registered for ${key}`);
  }

  const label =
    typeof route.label === 'string' ? route.label : route.label(data);

  const url = typeof route.url === 'string' ? route.url : route.url(data);

  return [
    url,
    label,
    (event: Event) => {
      event.preventDefault();
      state.breadcrumb = [...route(data), { label }];
      state.activeRoute = key;
    },
  ];
};

// STORE

const { state, dispose, onChange } = createStore<{
  routes: Route<Record<string, unknown>>[];
  breadcrumb: RouteHistory;
  activeRoute: string;
  routeChangeListeners: ((activeRoute: string) => void)[];
}>({ routes: [], breadcrumb: [], activeRoute: '', routeChangeListeners: [] });

export { state, dispose };

export const init = (
  routes: RouteConfig<Record<string, unknown>>[],
  breadcrumb: RouteHistory,
  activeRoute: string,
): void => {
  state.routes = routes.map((routeConfig) => makeRoute(routeConfig));
  state.breadcrumb = breadcrumb;
  state.activeRoute = activeRoute;
};

onChange('activeRoute', (activeRoute) => {
  Object.values(state.routeChangeListeners).forEach((listener) =>
    listener?.(activeRoute),
  );
});

export const getRoute = <RouteData extends Record<string, unknown>>(
  key: string,
): Route<RouteData> | undefined =>
  state.routes?.find((route) => route.key === key);

export const hasRoute = (key: string): boolean =>
  state.routes?.some((route) => route.key === key);

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
