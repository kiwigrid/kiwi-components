declare module '*.md';

declare interface Story<T> {
  (args: T): import('lit-html').TemplateResult;
  args?: T;
}
