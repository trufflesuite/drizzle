import { createBlockChannel } from '../src/blocks/blocksSaga';
import Web3 from 'web3';
import { runSaga } from 'redux-saga'

let web3;
let drizzle;
let syncAlways;
let blockListener;
let interval;
let blockPoller;

beforeAll(() => {
  web3 = new Web3(global.provider);
  drizzle = {};
  syncAlways = false;
  interval = 100;
});

describe('listening for blocks', () => {
  beforeEach(() => {
    blockListener = createBlockChannel({ drizzle, web3, syncAlways });
  });

  test('listens for block headers', async function() {
    await web3.eth.sendTransaction({
      from: '0x8adb46251e9cd45b5027501766531825c04a2e06',
      to: '0x8adb46251e9cd45b5027501766531825c04a2e06',
      value: 200
    })
    .then((receipt) => {
      blockListener.take((event) => {
        expect(event.type).toEqual('BLOCK_RECEIVED');
      });
    });
  });

  test('unsubscribes from block headers', function() {
    blockListener.take((event) => {
      expect(event.type).toEqual('@@redux-saga/CHANNEL_END');
    });

    blockListener.close();
  });
});

describe('polling for blocks', () => {
  beforeEach(() => {
    blockPoller = createBlockChannel({ drizzle, web3, syncAlways });
  });

  test('polls for block headers', async function() {
    await web3.eth.sendTransaction({
      from: '0x8adb46251e9cd45b5027501766531825c04a2e06',
      to: '0x8adb46251e9cd45b5027501766531825c04a2e06',
      value: 200
    })
    .then((receipt) => {
      blockPoller.take((event) => {
        expect(event.type).toEqual('BLOCK_FOUND');
      });
    });
  });

  test('terminates from block polling', function() {
    blockPoller.take((event) => {
      expect(event.type).toEqual('@@redux-saga/CHANNEL_END');
    });

    blockPoller.close();
  });
});