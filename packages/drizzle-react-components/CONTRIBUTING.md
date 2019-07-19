# Contributing

`drizzle-react-components` follows the same contribution guide as `drizzle`. Check it out [here](https://github.com/trufflesuite/drizzle/blob/develop/CONTRIBUTING.md).

This guide will cover the  `drizzle-react-components` specific content.

## Development

### Development Requirements

In order to develop Drizzle React Components (DRC), you'll need:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org)

### Getting Started

First clone this repository and install NPM dependencies:

    $ git clone git@github.com:trufflesuite/drizzle-react-components.git
    $ cd drizzle-react-components
    $ npm install

If all is good, then run the build command:

    $ npm run build

Your local DRC copy is contained in the `dist/` directory.

To use this in a project, use `npm link`:

    $ cd dist
    $ npm link // may require sudo
    $ cd my-project-root
    $ npm link drizzle-react-components

You're ready to use your local development version of DRC in your project.

## Tips for Getting your PR Merged

These tips will make it easier to review and eventually merge your PRs.

1. When submitting a PR, make sure to reference the issue number so we can better trace what issue the PR is solving.

1. Keep your PRs small and atomic. Only resolve the issue you are targetting. Don't mix refactors with features/bugfixes, it bloats the diff and makes it hard to see what code is related to the actual feature/bugfix.

1. If it's a new feature, add an example implementation to the `test-app` and `test-app-legacy-context` and update `README.md`.