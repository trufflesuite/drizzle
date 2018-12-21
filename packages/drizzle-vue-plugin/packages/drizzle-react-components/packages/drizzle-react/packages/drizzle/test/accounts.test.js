import { getAccounts } from '../src/accounts/accountsSaga';
import Web3 from 'web3';
import { runSaga } from 'redux-saga';

let web3;
let dispatchedActions;
let store;

beforeAll(() => {
  web3 = new Web3('ws://127.0.0.1:8545');

  dispatchedActions = [];
  store = {
    getState: () => ({}),
    dispatch: action => dispatchedActions.push(action)
  };
});

test('gets accounts', async function() {
  await runSaga(store, getAccounts, { web3 }).done;

  expect(dispatchedActions[0]['accounts'].length).toEqual(10);
});