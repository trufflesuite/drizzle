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
   your `npm config registry`. If you've never set the registry, you can recover
   with running `npm config set registry https://registry.npmjs.org/`.
   ```sh
   $ npm run reg:bounce
   ```
   You can now test the build against your local registry which should be
   running on `http://localhost:9099`

   Some tests you can run:
    - run the examples in:
      - packages/react-components/test-app
      - packages/vue-plugin/test-app
    - adapt the drizzle box to test aginst the local server
