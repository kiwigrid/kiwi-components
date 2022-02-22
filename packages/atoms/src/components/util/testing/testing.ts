export function expectDefined<T>(
  value: T | undefined | null,
): asserts value is T {
  expect(value).toBeDefined();
  expect(value).not.toBeNull();
}

/**
 * If you need the Kiwigrid library-bootstrap styles for your e2e-test you can
 * load this file into the test with the following example
 *
 * @example
 * await page.addStyleTag({
 *   url: globalStylesUrl,
 * });
 *
 */
export const globalStylesUrl =
  'https://storage.googleapis.com/library-bootstrap/files/7.28.0/kiwigrid/theme.min.css';
