declare module '*.md' {
  const value: string;
  export default value;
}

declare interface Story<T> {
  (args: T): import('lit-html').TemplateResult;
  args?: T;
}
