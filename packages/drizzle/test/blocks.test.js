import { createBlockChannel } from '../src/blocks/blocksSaga'
import { mockDrizzleStore, mockWeb3 } from './utils/helpers'

let web3
let mockStore
let syncAlways
let blockListener
let blockPoller

beforeAll(() => {
  [mockStore] = mockDrizzleStore()
  web3 = mockWeb3()
  syncAlways = false
})

describe('listening for blocks', () => {
  beforeEach(() => {
    blockListener = createBlockChannel({ mockStore, web3, syncAlways })
  })

  test('listens for block headers', async () => {
    await web3.eth.sendTransaction({
      from: '0x8adb46251e9cd45b5027501766531825c04a2e06',
      to: '0x8adb46251e9cd45b5027501766531825c04a2e06',
      value: 200
    }).then((receipt) => {
      blockListener.take((event) => {
        expect(event.type).toEqual('BLOCK_RECEIVED')
      })
    })
  })

  test('unsubscribes from block headers', () => {
    blockListener.take((event) => {
      expect(event.type).toEqual('@@redux-saga/CHANNEL_END')
    })

    blockListener.close()
  })
})

describe('polling for blocks', () => {
  beforeEach(() => {
    blockPoller = createBlockChannel({ mockStore, web3, syncAlways })
  })

  test('polls for block headers', async () => {
    await web3.eth.sendTransaction({
      from: '0x8adb46251e9cd45b5027501766531825c04a2e06',
      to: '0x8adb46251e9cd45b5027501766531825c04a2e06',
      value: 200
    }).then((receipt) => {
      blockPoller.take((event) => {
        expect(event.type).toEqual('BLOCK_FOUND')
      })
    })
  })

  test('terminates from block polling', () => {
    blockPoller.take((event) => {
      expect(event.type).toEqual('@@redux-saga/CHANNEL_END')
    })

    blockPoller.close()
  })
})
