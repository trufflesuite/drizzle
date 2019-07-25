# Testing This Branch.

1. Install [Verdaccio](https://verdaccio.org/docs/en/installation), a
   lightweight private npm proxy registry for Node
   ```sh
   $ npm -g i verdaccio
   ```
1. Install drizzle-suite
   ```sh
   $ git clone git@github.com:cds-amal/drizzle-suite.git
   $ cd drizzle-suite
   ```
1. Change branch and bootstrap
   ```sh
   $ git checkout chore/lerna-migration
   $ lerna bootstrap
   ```
1. Setup Verdaccio. The `reg:bounce` script will make sure Verdaccio server is
   started and a user is registered and logged into it. *N.B.* This overrides
   your `npm config registry`. No worries, you can recover
   by executing `npm config set registry https://registry.npmjs.org/`.
   ```sh
   $ yarn run verdaccio:bounce
   ```
   A Verdaccio server is now running running on `http://localhost:9099`
   You can now publish locally, and of course, test the builds.
   *Note*: The Verdaccio server can be killed by: `yarn run verdaccio:kill`

1. Publish to local Verdaccio
   ```sh
   $ yarn run verdaccio:bounce
   $ lerna publish from-package
   ```
   Some tests you can run:
    - run the examples in:
      - packages/react-components/test-app
      - packages/vue-plugin/test-app
    - Use [this adapted drizzle](https://github.com/cds-amal/drizzle-box/tree/chore/mono-repo)
      box to test packages deployed to local Verdaccio server
      ```sh
      $ git clone git@github.com:cds-amal/drizzle-box.git dbox-mono-test
      $ cd dbox-mono-test
      $ git checkout mono-repo
      ```

