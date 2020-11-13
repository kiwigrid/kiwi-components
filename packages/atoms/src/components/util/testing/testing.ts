export function expectDefined<T>(
  value: T | undefined | null,
): asserts value is T {
  expect(value).toBeDefined();
}
