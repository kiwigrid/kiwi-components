# Kiwi Components | Web Components
<img src="https://img.shields.io/github/workflow/status/kiwigrid/kiwi-components/continuous-integration/master">

## Status
**Project status: work in progress**

## Components
* [Blueprint](packages/blueprint)

## Development

### Commits
This project uses conventional commit messages. This leads to more readable messages that are easy to follow when looking through the project history. But also, we use the git commit messages to generate the change log and to versioning the components/packages.

#### Format

    <type>(<scope>): <subject>
    <BLANK LINE>
    <body>
    <BLANK LINE>
    <footer>

`type` should be one of the `type-enum` in the file `.commitlintrc.yml`. \
`scope` is a lerna package (folder below `packages` directory).

#### Examples

    feat(blueprint): add message property
    ci: add continuous integration github action
    
##### Commit Dummy
