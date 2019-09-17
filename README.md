<img src="https://truffleframework.com/img/drizzle-logo-dark.svg" width="200">

----

**Note:** _This monorepo is aligned with our `@drizzle` scoped package release of 1.5.0. If you are looking for our old drizzle repo, it has been moved [here](https://github.com/trufflesuite/drizzle-legacy)._

Overview
--------

Drizzle is a collection of libraries to simplify development of your dapps
in Plain JavaScript, React and Vue.

* [@drizzle/store](./packages/store/README.md):- is the state manager of
    Drizzle. It handles the boilerplate for web3 connection as
    synchronizing Smart Contract state and events.

* [@drizzle/react-plugin](./packages/react-plugin/README.md):- defines the
    Drizzle Provider for a React project.

* [@drizzle/react-components](./packages/react-components/README.md):- is a
    collection of primitive web controls that transforms Smart Contract data
    types to their appropriate html controls.  It's the fastest way to visualize
    Contract data on a browser with React!

* [@drizzle/vue-plugin](./packages/vue-plugin/README.md):- a Vue adaptor and
    collection of html controls that will get your Vue dapp up and running
    quickly!

Contributing to `drizzle`
-------------------------------

_Thanks for taking the time to help out and improve `drizzle`! :tada:_

The following is a set of guidelines for `drizzle` contributions and may
change over time. Feel free to suggest improvements to this document in a pull
request!


How Can I Contribute?
---------------------

All contributions are welcome!

If you run into an issue, the first step is to reach out in [our community
Gitter channel](https://gitter.im/ConsenSys/truffle), in case others have run
into the problem or know how to help.

To report a problem or to suggest a new feature, [open a GitHub
Issue](https://github.com/trufflesuite/drizzle/issues/new). This will
alert us of the problem so we can prioritize a fix.

For code contributions, for either new features or bug fixes, see
[Development](#development).

If you're looking to make a substantial change, you may want to reach out first
to give us a heads up.


Development Requirements
------------------------

In order to develop `drizzle`, you'll need:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [Lerna](https://lerna.js.org/)
- [Ganache-cli](https://github.com/trufflesuite/ganache-cli)

### Getting Started

First clone this repository and install NPM dependencies:

    $ git clone git@github.com:trufflesuite/drizzle.git
    $ cd drizzle
    $ yarn

If all is good, navigate (`cd`) to the package of interest and
follow the README document there.

### Forks, Branches, and Pull Requests

Community contributions to `drizzle` require that you first fork the
repository. After your modifications, push changes to your
fork(s) and submit a pull request upstream to `trufflesuite`.

See GitHub documentation about [Collaborating with issues and pull
requests](https://help.github.com/categories/collaborating-with-issues-and-pull-requests/)
for more information.

> :exclamation: **Note:** _`drizzle` development uses a long-lived
> `develop` branch for new (non-hotfix) development. Pull Requests should be
> opened against `develop` in all repositories._

#### Branching Model

`drizzle` projects adhere to Gitflow, a Git workflow designed around a
strict branching model to more easily track feature development vs. releases.
[For more information on Gitflow, check out Atlassian's helpful
guide](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

We can separate our branches into long-lived and purposeful branches. We have two long-lived branches:

- **`master`**, checkout for hotfix development; in sync with the latest
    `release` (synced after the release has gone out publicly).
- **`develop`**, checkout for feature development; latest unstable releases
    and work targeting the next major or minor release.

All development is done on branches with a `prefix/title` style naming
convention. These are later merged into `develop` and finally a `release` branch
before final release. These are the two prefixes we use:

- **`feature/`**, for new feature development; later merged with `develop` and `release`.
- **`fix/`**, for hotfix development; later merged with `master` and `develop`.

For example, a fix for a contract fetching error might look like: `fix/contract-fetching`.

#### Working on a Branch

Use a branch for your modifications, tracking it on your fork:

    $ git checkout -b feature/sweet-feature // or "fix/" prefix if a hotfix
    $ git push -u ChocolateLover feature/sweet-feature

Then, make changes and commit as usual.


#### Testing and debugging with Ganache

Start and wait for Ganache to initialize.

    $ yarn ganache

You'll know when the console shows the following:

    test-truffle-contracts: Listening on 127.0.0.1:9545

Open up another terminal and deploy the contracts to Ganache:

    $ yarn ganache:deploy

Deployment is done when the following is logged to the console:

    test-truffle-contracts: Summary
    test-truffle-contracts: =======
    test-truffle-contracts: > Total deployments:   4
    test-truffle-contracts: > Final cost:          ... ETH

Start the front end test apps:

    yarn serve:ui

Now you'll have 3 apps to interact with.

  - [Generic React app](http://localhost:3000) on port 3000
  - [React app using the context API](http://localhost:3001) on port 3001
  - [Vue app](http://localhost:3002) on port 3002


#### Testing and debugging your code

Because these libraries are dependencies to your front end project, you'll want
to be run your project against the local changes you're working on. Use `yarn
link`

First navigate to the package you want to work on. For example, if you're
working on the vue-plugin.

    $ cd packages/vue-plugin
    $ yarn link    # sym-link package to yarn's global scope
    $ yarn prepare # build your changes

Now that the package has been linked, yarn will be able to resolve it when you
specify it as a dependency.

Navigate to your front end project:

    $ yarn link @drizzle/vue-plugin  # use your local vue-plugin


### Important NPM Scripts for Development

Cleaning:

- `clean`: Clean all non-root workspaces
- `clean:all`: All workspaces including root and removes yarn.lock

Running the Test UIs:

- `ganache`: Launch a Ganache instance
- `ganache:deploy`: Deploy some test contracts to an existing Ganache instance
- `serve:ui`: Launch the test UIs that work with the two Ganache commands above

Webpack bundle size report:

- `webpack-reports`: Creates a report of the bundle size

Tests:

- `test`: Run all tests
- `test:store`: Run only tests for `@drizzle/store`
- `test:store:verbose`: Run only tests for `@drizzle/store` passing verbose flag
- `test:vue`: Run only tests for `@drizzle/vue-plugin`


Additional Notes
----------------

Join the chat in [our community Spectrum
channel](https://spectrum.chat/trufflesuite). If anything about this process is
unclear, or for helpful feedback of any kind, we'd love to hear from you!

**Thanks again for all your support, encouragement, and effort! `drizzle`
would not be possible without contributors like you. :bow:**


