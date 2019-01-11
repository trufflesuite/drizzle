import { createBlockChannel } from '../src/blocks/blocksSaga'
import { mockDrizzleStore, mockWeb3 } from './utils/helpers'

let web3
let mockedStore
let syncAlways
let blockListener
let blockPoller

beforeAll(() => {
  ;[mockedStore] = mockDrizzleStore()
  web3 = mockWeb3()
  syncAlways = false
})

describe('listening for blocks', () => {
  beforeEach(() => {
    blockListener = createBlockChannel({ mockedStore, web3, syncAlways })
  })

  test('listens for block headers', async () => {
    await web3.eth.sendTransaction({
      from: global.accounts[0],
      to: global.accounts[1],
      value: 200
    })

    blockListener.take((event) => {
      expect(event.type).toEqual('BLOCK_RECEIVED')
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
    blockPoller = createBlockChannel({ mockedStore, web3, syncAlways })
  })

  test('polls for block headers', async () => {
    await web3.eth.sendTransaction({
      from: global.accounts[0],
      to: global.accounts[1],
      value: 200
    })

    blockPoller.take((event) => {
      expect(event.type).toEqual('BLOCK_FOUND')
    })
  })

  test('terminates from block polling', () => {
    blockPoller.take((event) => {
      expect(event.type).toEqual('@@redux-saga/CHANNEL_END')
    })

    blockPoller.close()
  })
})
