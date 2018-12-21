import { initializeWeb3, getNetworkId } from '../src/web3/web3Saga';
import { runSaga } from 'redux-saga'

global.window = {};

let dispatchedActions;
let store;
let web3;
const options = {
  fallback: {
    type: 'ws',
    url: 'ws://127.0.0.1:8545'
  }
};

beforeAll(() => {
  dispatchedActions = [];
  store = {
    getState: () => ({}),
    dispatch: action => dispatchedActions.push(action)
  };
});

test('get web3', async function() {
  web3 = await runSaga(store, initializeWeb3, { options }).done;

  expect(dispatchedActions[0].type).toEqual('WEB3_INITIALIZED');
});

test('get network ID', async function() {
  await runSaga(store, getNetworkId, { web3 }).done;

  expect(dispatchedActions[1].networkId).toEqual(6777);
});