import { createBlockChannel } from '../src/blocks/blocksSaga'
import Web3 from 'web3'
import { runSaga } from 'redux-saga'

let web3
let dispatchedActions
let drizzle
let syncAlways
let blockListener

beforeAll(() => {
  web3 = new Web3('ws://127.0.0.1:8545')
  drizzle = {}
  syncAlways = false
})

describe('listening for blocks', () => {
  beforeEach(() => {
    blockListener = createBlockChannel({ drizzle, web3, syncAlways })
  })

  test('listens for blocks', async function() {
    await web3.eth
      .sendTransaction({
        from: '0x8adb46251e9cd45b5027501766531825c04a2e06',
        to: '0x8adb46251e9cd45b5027501766531825c04a2e06',
        value: 200
      })
      .then(receipt => {
        blockListener.take(event => {
          expect(event.type).toEqual('BLOCK_RECEIVED')
        })
      })
  })
})
