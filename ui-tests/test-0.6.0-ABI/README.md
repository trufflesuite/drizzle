This test app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To test

1. Build out the Monorepo from root folder
   ```
   yarn

   ```
1. Start ganache server from root.
   ```
   yarn ganache

   ```

1. In another terminal, navigate to this project and deploy smart contracts,
   then start the dev app.
   ```
   cd ui-tests/custom-provider
   yarn ganache:deploy
   yarn serve:ui

   ```

1. Open [Test app](http://localhost:3003) and verify that you can change
   SimpleStorage's value without MetaMask intruding.

