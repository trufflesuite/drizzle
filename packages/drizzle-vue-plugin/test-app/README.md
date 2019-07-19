# Sample app that demonstrates using @drizzle/vue-plugin.

This folder is a Truffle project with 3 example smart contracts:

* SimpleStorage.sol
* ComplexStorage.sol
* TutorialToken.sol

The code of the vuejs frontend is in the `vapp` folder.

## Getting started

1. Install truffle:

```
npm i -g truffle
```

2. Install dependencies of Truffle project (in this folder):

```
npm install
```

3. Deploy smart contracts:

```
truffle develop
truffle (develop)> migrate //This should be run inside the truffle console 
```

4. Install dependencies of the vuejs frontend:

```
cd vapp
npm install
```

5. Run the frontend:

```
npm run serve
```

Now, go to your browser at `http://localhost:8080` to interact visually with the 3 smart contracts
(SimpleStorage.sol, ComplexStorage.sol and TutorialToken.sol)
