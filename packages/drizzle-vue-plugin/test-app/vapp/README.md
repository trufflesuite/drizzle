# Test app

## Background

Truffle Suite has the tools to isolate and simulate an Ethereum node allowing
you to concentrate on Front End development. In this setup we will use Truffle
Developer Console to manage and deploy our Smart contracts to a test Ethereum
node.

## Project Setup

1. Start truffle develop console from the `test-app` folder
```
$ npx truffle develop

```

2. Compile and migrate the solidity contracts to the test environment. It is
   successful when you see a summary with 4 total deployments.

```
truffle(develop)> migrate
...
...
...
Summary
=======
> Total deployments:   4
> Final cost:          0.06728452 ETH

truffle(develop)>
```

3. **In another terminal**, navigate to the `test-app/vapp` folder and start the
   vue development server.

```
$ npm run serve
```

Todo: Link to video or asciinema.
