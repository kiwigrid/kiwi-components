export function expectDefined<T>(
  value: T | undefined | null,
): asserts value is T {
  expect(value).toBeDefined();
  expect(value).not.toBeNull();
}

export const globalStylesUrl =
  'https://storage.googleapis.com/library-bootstrap/files/7.28.0/kiwigrid/theme.min.css';
