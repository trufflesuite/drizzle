import { getAccountBalances } from '../src/accountBalances/accountBalancesSaga';
import Web3 from 'web3';
import { runSaga } from 'redux-saga'

let web3;
let dispatchedActions;
let store;

beforeAll(() => {
  web3 = new Web3(global.provider);

  dispatchedActions = [];
  store = { 
    getState: () => ({
      accounts: [
        '0x8adb46251e9cd45b5027501766531825c04a2e06'
      ]
    }),
    dispatch: action => dispatchedActions.push(action)
  };
});

test('get account balances', async function() {
  await runSaga(store, getAccountBalances, { web3 }).done;

  expect(dispatchedActions[0].accountBalance).toEqual(String(1e20));
});