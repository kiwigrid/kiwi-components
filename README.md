# Kiwi Components | Web Components

**Project status: work in progress**

## Development

### Commits

This project uses conventional commit messages. This leads to more readable messages that are easy to follow when looking through the project history. But also, we use the git commit messages to generate the change log and to versioning the components/packages.

#### Format
```text
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

`type` should be one of the `type-enum` in the file `.commitlintrc.yml`. \
`scope` is a lerna package (folder below `packages` directory).

#### Examples

`feat(blueprint): add message property`
