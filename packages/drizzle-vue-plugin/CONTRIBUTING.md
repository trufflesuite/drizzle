Contributing to `drizzle-vue-plugin`
===============================

_Thanks for taking the time to help out and improve `drizzle-vue-plugin`! :tada:_

The following is a set of guidelines for `drizzle-vue-plugin` contributions and may change over time. Feel free to suggest improvements to this document in a pull request!


Contents
--------

[How Can I Contribute?](#how-can-i-contribute)

[Development](#development)
  - [Overview](#overview)
  - [Development Requirements](#development-requirements)
  - [Getting Started](#getting-started)
  - [Forks, Branches, and Pull Requests](#forks-branches-and-pull-requests)
    - [Branching Model](#branching-model)
    - [Working on a Branch](#working-on-a-branch)

[Additional Notes](#additional-notes)


How Can I Contribute?
---------------------

All contributions are welcome!

If you run into an issue, the first step is to reach out in [our community Gitter channel](https://gitter.im/ConsenSys/truffle), in case others have run into the problem or know how to help.

To report a problem or to suggest a new feature, [open a GitHub Issue](https://github.com/trufflesuite/drizzle/issues/new).  This will alert the `drizzle-vue-plugin` maintainers of the problem so they can prioritize a fix.

For code contributions, for either new features or bug fixes, see [Development](#development).

If you're looking to make a substantial change, you may want to reach out first to give us a heads up.


Development
-----------

### Overview

`drizzle-vue-plugin` listens [`drizzle`](https://github.com/trufflesuite/drizzle)'s Redux store updates and transforms them into observable pieces of state for contracts, accounts and drizzle status.


### Development Requirements

In order to develop `drizzle-vue-plugin`, you'll need:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org)

### Getting Started

First clone this repository and install NPM dependencies:

    $ git clone git@github.com:trufflesuite/drizzle-vue-plugin.git
    $ cd drizzle-vue-plugin
    $ npm install

If all is good, then run the build command:

    $ npm run build:bundle

Your local `drizzle-vue-plugin` copy is contained in the `dist/` directory.

To use this in a project, use `npm link`:

    $ cd dist
    $ npm link // may require sudo
    $ cd my-project-root
    $ npm link drizzle-vue-plugin

You're ready to use your local development version of `drizzle-vue-plugin` in your project.

### Forks, Branches, and Pull Requests

Community contributions to `drizzle-vue-plugin` require that you first fork each repository you wish to modify. After your modifications, push changes to your fork(s) and submit a pull request upstream to `trufflesuite`'s fork(s).

See GitHub documentation about [Collaborating with issues and pull requests](https://help.github.com/categories/collaborating-with-issues-and-pull-requests/) for more information.

> :exclamation: **Note:** _`drizzle-vue-plugin` development uses a long-lived `develop` branch for new (non-hotfix) development. Pull Requests should be opened against `develop` in all repositories._

#### Branching Model

`drizzle-vue-plugin` projects adhere to Gitflow, a Git workflow designed around a strict branching model to more easily track feature development vs. releases. [For more information on Gitflow, check out Atlassian's helpful guide](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

We can separate our branches into long-lived and purposeful branches. We have two long-lived branches:

- **`master`**, checkout for hotfix development; in sync with the latest `release` (synced after the release has gone out publicly).
- **`develop`**, checkout for feature development; latest unstable releases and work targeting the next major or minor release.

All development is done on branches with a `prefix/title` style naming convention. These are later merged into `develop` and finally a `release` branch before final release. These are the two prefixes we use:

- **`feature/`**, for new feature development; later merged with `develop` and `release`.
- **`fix/`**, for hotfix development; later merged with `master` and `develop`.

For example, a fix for a contract fetching error might look like: `fix/contract-fetching`.

#### Working on a Branch

Use a branch for your modifications, tracking it on your fork:

    $ git checkout -b feature/sweet-feature // or "fix/" prefix if a hotfix
    $ git push -u ChocolateLover feature/sweet-feature

Then, make changes and commit as usual.


Additional Notes
----------------

Join the chat in [our community Spectrum channel](https://spectrum.chat/trufflesuite). If anything about this process is unclear, or for helpful feedback of any kind, we'd love to hear from you!

**Thanks again for all your support, encouragement, and effort! `drizzle-vue-plugin` would not be possible without contributors like you. :bow:**
