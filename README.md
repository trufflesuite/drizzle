<img src="https://truffleframework.com/img/drizzle-logo-dark.svg" width="200">
[![All Contributors](https://img.shields.io/badge/all_contributors-21-orange.svg?style=flat-square)](#contributors-)

----

**Note:** _This monorepo is aligned with our `@drizzle` scoped package release of 1.5.0. If you are looking for our old drizzle repo, it has been moved [here](https://github.com/trufflesuite/drizzle-legacy)._

Overview
--------

Drizzle Suite is a collection of libraries to simplify development of your dapps
in Plain JavaScript, React and Vue.

* [@drizzle/store](./packages/store/README.md):- is the state manager of
    drizzle suite. It handles the boilerplate for web3 connection as
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

Contributing to `drizzle-suite`
-------------------------------

_Thanks for taking the time to help out and improve `drizzle-suite`! :tada:_

The following is a set of guidelines for `drizzle-suite` contributions and may
change over time. Feel free to suggest improvements to this document in a pull
request!


How Can I Contribute?
---------------------

All contributions are welcome!

If you run into an issue, the first step is to reach out in [our community
Gitter channel](https://gitter.im/ConsenSys/truffle), in case others have run
into the problem or know how to help.

To report a problem or to suggest a new feature, [open a GitHub
Issue](https://github.com/trufflesuite/drizzle-suite/issues/new). This will
alert us of the problem so we can prioritize a fix.

For code contributions, for either new features or bug fixes, see
[Development](#development).

If you're looking to make a substantial change, you may want to reach out first
to give us a heads up.


Development Requirements
------------------------

In order to develop `drizzle-suite`, you'll need:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [Lerna](https://lerna.js.org/)
- [Ganache-cli](https://github.com/trufflesuite/ganache-cli)

### Getting Started

First clone this repository and install NPM dependencies:

    $ git clone git@github.com:trufflesuite/drizzle-suite.git
    $ cd drizzle-suite
    $ yarn

If all is good, navigate (`cd`) to the package of interest and
follow the README document there.

### Forks, Branches, and Pull Requests

Community contributions to `drizzle-suite` require that you first fork the
repository. After your modifications, push changes to your
fork(s) and submit a pull request upstream to `trufflesuite`.

See GitHub documentation about [Collaborating with issues and pull
requests](https://help.github.com/categories/collaborating-with-issues-and-pull-requests/)
for more information.

> :exclamation: **Note:** _`drizzle-suite` development uses a long-lived
> `develop` branch for new (non-hotfix) development. Pull Requests should be
> opened against `develop` in all repositories._

#### Branching Model

`drizzle-suite` projects adhere to Gitflow, a Git workflow designed around a
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


#### Testing and debugging a ganache-suite

Start and wait for Ganache to initialize.

    $ yarn ganache

You'll know when the console shows:

    test-truffle-contracts: Listening on 127.0.0.1:9545

Deploy the contracts to Ganache

    $ yarn ganache:deploy

Deployment is done when the following is logged to the console:

    test-truffle-contracts: Summary
    test-truffle-contracts: =======
    test-truffle-contracts: > Total deployments:   4
    test-truffle-contracts: > Final cost:          ... ETH

Start the front end test apps

    yarn serve:ui

You'll have 3 apps to interact with.

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


Additional Notes
----------------

Join the chat in [our community Spectrum
channel](https://spectrum.chat/trufflesuite). If anything about this process is
unclear, or for helpful feedback of any kind, we'd love to hear from you!

**Thanks again for all your support, encouragement, and effort! `drizzle-suite`
would not be possible without contributors like you. :bow:**



## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/DiscRiskandBisque"><img src="https://avatars2.githubusercontent.com/u/3990373?v=4" width="100px;" alt="Josh Quintal"/><br /><sub><b>Josh Quintal</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=DiscRiskandBisque" title="Code">💻</a> <a href="https://github.com/trufflesuite/drizzle-suite/commits?author=DiscRiskandBisque" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/adrianmcli"><img src="https://avatars2.githubusercontent.com/u/943555?v=4" width="100px;" alt="Adrian Li"/><br /><sub><b>Adrian Li</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=adrianmcli" title="Code">💻</a> <a href="https://github.com/trufflesuite/drizzle-suite/commits?author=adrianmcli" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.heyseli.com"><img src="https://avatars3.githubusercontent.com/u/36248745?v=4" width="100px;" alt="Heyse Li"/><br /><sub><b>Heyse Li</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=honestbonsai" title="Code">💻</a> <a href="https://github.com/trufflesuite/drizzle-suite/commits?author=honestbonsai" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/cds-amal"><img src="https://avatars1.githubusercontent.com/u/2529600?v=4" width="100px;" alt="Amal Sudama"/><br /><sub><b>Amal Sudama</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=cds-amal" title="Code">💻</a> <a href="https://github.com/trufflesuite/drizzle-suite/commits?author=cds-amal" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/EbiEbiEvidence"><img src="https://avatars1.githubusercontent.com/u/24590869?v=4" width="100px;" alt="Kosui Iwasa"/><br /><sub><b>Kosui Iwasa</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=EbiEbiEvidence" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/JasoonS"><img src="https://avatars1.githubusercontent.com/u/6032276?v=4" width="100px;" alt="Jason Smythe"/><br /><sub><b>Jason Smythe</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=JasoonS" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/MrRefactoring"><img src="https://avatars0.githubusercontent.com/u/10329528?v=4" width="100px;" alt="Vladislav Tupikin"/><br /><sub><b>Vladislav Tupikin</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=MrRefactoring" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/ProphetDaniel"><img src="https://avatars2.githubusercontent.com/u/5958020?v=4" width="100px;" alt="Prophet Daniel"/><br /><sub><b>Prophet Daniel</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=ProphetDaniel" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/SeanJCasey"><img src="https://avatars3.githubusercontent.com/u/4407542?v=4" width="100px;" alt="SeanJCasey"/><br /><sub><b>SeanJCasey</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=SeanJCasey" title="Code">💻</a> <a href="https://github.com/trufflesuite/drizzle-suite/commits?author=SeanJCasey" title="Documentation">📖</a></td>
    <td align="center"><a href="https://st3c.github.io/devportfolio/"><img src="https://avatars0.githubusercontent.com/u/5721856?v=4" width="100px;" alt="Stefano Convertino"/><br /><sub><b>Stefano Convertino</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=St3C" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/agildehaus6"><img src="https://avatars0.githubusercontent.com/u/23722451?v=4" width="100px;" alt="agildehaus6"/><br /><sub><b>agildehaus6</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=agildehaus6" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/amitaymolko"><img src="https://avatars3.githubusercontent.com/u/1846494?v=4" width="100px;" alt="amitaymolko"/><br /><sub><b>amitaymolko</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=amitaymolko" title="Code">💻</a></td>
    <td align="center"><a href="https://delta.camp"><img src="https://avatars1.githubusercontent.com/u/4247628?v=4" width="100px;" alt="Brendan Asselstine"/><br /><sub><b>Brendan Asselstine</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=asselstine" title="Code">💻</a></td>
    <td align="center"><a href="https://iamsamy.com"><img src="https://avatars0.githubusercontent.com/u/25502424?v=4" width="100px;" alt="Denis Angell"/><br /><sub><b>Denis Angell</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=dangell7" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/dannycarrera"><img src="https://avatars3.githubusercontent.com/u/16018201?v=4" width="100px;" alt="dannycarrera"/><br /><sub><b>dannycarrera</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=dannycarrera" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dillonmcroberts"><img src="https://avatars2.githubusercontent.com/u/7416637?v=4" width="100px;" alt="Dillon McRoberts"/><br /><sub><b>Dillon McRoberts</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=dillonmcroberts" title="Code">💻</a></td>
    <td align="center"><a href="https://epiqueras.github.io"><img src="https://avatars2.githubusercontent.com/u/19157096?v=4" width="100px;" alt="Enrique Piqueras"/><br /><sub><b>Enrique Piqueras</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=epiqueras" title="Code">💻</a> <a href="https://github.com/trufflesuite/drizzle-suite/commits?author=epiqueras" title="Documentation">📖</a></td>
    <td align="center"><a href="https://guillaumeduveau.com"><img src="https://avatars2.githubusercontent.com/u/4377644?v=4" width="100px;" alt="Guillaume Duveau"/><br /><sub><b>Guillaume Duveau</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=guix77" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/igorline"><img src="https://avatars2.githubusercontent.com/u/1465430?v=4" width="100px;" alt="Igor Line"/><br /><sub><b>Igor Line</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=igorline" title="Code">💻</a></td>
    <td align="center"><a href="https://eattheblocks.com"><img src="https://avatars2.githubusercontent.com/u/9279488?v=4" width="100px;" alt="Julien Klepatch"/><br /><sub><b>Julien Klepatch</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=jklepatch" title="Code">💻</a></td>
    <td align="center"><a href="https://twitter.com/johnmpotter"><img src="https://avatars2.githubusercontent.com/u/5359194?v=4" width="100px;" alt="John Potter"/><br /><sub><b>John Potter</b></sub></a><br /><a href="https://github.com/trufflesuite/drizzle-suite/commits?author=johnmpotter" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!