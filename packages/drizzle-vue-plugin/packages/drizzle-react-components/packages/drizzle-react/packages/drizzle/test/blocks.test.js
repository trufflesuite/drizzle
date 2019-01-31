import { createBlockChannel } from '../src/blocks/blocksSaga'
import { mockDrizzleStore, getWeb3 } from './utils/helpers'

describe('read from blocks', () => {
  let web3
  let mockedStore
  let syncAlways

  beforeAll(() => {
    ;[mockedStore] = mockDrizzleStore()
    web3 = getWeb3()
    syncAlways = false
  })

  describe('by listening through websockets', () => {
    let blockListener

    beforeEach(() => {
      blockListener = createBlockChannel({ mockedStore, web3, syncAlways })
    })

    test('listens for block headers', async () => {
      await web3.eth.sendTransaction({
        from: global.accounts[0],
        to: global.accounts[1],
        value: 200
      })

      blockListener.take(event => {
        expect(event.type).toEqual('BLOCK_RECEIVED')
      })
    })

    test('unsubscribes from block headers', () => {
      blockListener.take(event => {
        expect(event.type).toEqual('@@redux-saga/CHANNEL_END')
      })

      blockListener.close()
    })
  })

  describe('by polling', () => {
    let blockPoller

    beforeEach(() => {
      blockPoller = createBlockChannel({ mockedStore, web3, syncAlways })
    })

    test('polls for block headers', async () => {
      await web3.eth.sendTransaction({
        from: global.accounts[0],
        to: global.accounts[1],
        value: 200
      })

      blockPoller.take(event => {
        expect(event.type).toEqual('BLOCK_FOUND')
      })
    })

    test('terminates from block polling', () => {
      blockPoller.take(event => {
        expect(event.type).toEqual('@@redux-saga/CHANNEL_END')
      })

      blockPoller.close()
    })
  })
})
