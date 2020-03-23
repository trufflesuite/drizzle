import {
  createBlockChannel,
  createBlockPollChannel
} from '../src/blocks/blocksSaga'
import { getWeb3 } from './utils/helpers'
import * as BlocksActions from '../src/blocks/constants'

describe('read from blocks', () => {
  let web3
  let syncAlways
  const drizzle = {}

  beforeAll(() => {
    web3 = getWeb3()
    syncAlways = false
  })

  describe('by listening through websockets', () => {
    let blockListener

    beforeEach(() => {
      blockListener = createBlockChannel({ drizzle, web3, syncAlways })
    })

    test('listens for block headers', done => {
      // Subscribe to event
      blockListener.take(event => {
        expect(event.type).toEqual(BlocksActions.BLOCK_RECEIVED)
        done()
      })

      // Invoke action to trigger event
      web3.eth.sendTransaction({
        from: global.accounts[0],
        to: global.accounts[1],
        value: 200
      })
    })

    test('unsubscribes from block headers', done => {
      // Subscribe to event
      blockListener.take(event => {
        expect(event.type).toEqual('@@redux-saga/CHANNEL_END')
        done()
      })

      // Invoke action to trigger event
      blockListener.close()
    })
  })

  describe('by polling', () => {
    let blockPoller

    beforeEach(() => {
      const interval = 1000
      blockPoller = createBlockPollChannel({
        drizzle,
        interval,
        web3,
        syncAlways
      })
    })

    test('polls for block headers', done => {
      // Subscribe to event
      blockPoller.take(event => {
        expect(event.type).toEqual(BlocksActions.BLOCK_FOUND)
        done()
      })

      // Invoke action to trigger event
      web3.eth.sendTransaction({
        from: global.accounts[0],
        to: global.accounts[1],
        value: 200
      })
    })

    test('terminates from block polling', done => {
      // Subscribe to event
      blockPoller.take(event => {
        expect(event.type).toEqual('@@redux-saga/CHANNEL_END')
        done()
      })

      // Invoke action to trigger event
      blockPoller.close()
    })
  })
})
