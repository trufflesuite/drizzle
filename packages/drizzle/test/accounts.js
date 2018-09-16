import { getAccounts } from '../src/accounts/accountsSaga'
import Ganache from 'ganache-cli'
import Web3 from 'web3'
import { assert } from 'chai'
import { put, call } from 'redux-saga/effects'

describe('Accounts Saga', function() {
  var provider
  var web3

  var dispatchedActions
  var store
  var accounts

  before('Create Provider', async function() {
    provider = Ganache.provider({ seed: 'drizzle', gasLimit: 7000000 })
    web3 = new Web3(provider)

    dispatchedActions = []
    store = {
      getState: () => {},
      dispatch: action => dispatchedActions.push(action)
    }

    accounts = [
      '0x8aDB46251E9cd45b5027501766531825C04a2E06',
      '0xb50CF9eD8f60605bEbB967776925f21Ba5c81D5D',
      '0x7fC9AD8C7A3232Aed94d6C68728D22D722694824',
      '0x6DADB5b9C2510bD3C266329781adFBa9A5145442',
      '0xc41E494bE83a33Bf56B5C071094859067bC9E728',
      '0x5B5b5c834daCf8ad46464a283a2B1B4Bd06A456e',
      '0x4B165a6036791822777C78cF7931F1d205d29118',
      '0x3950A710fb4b4ed456EC469E973D35c170802609',
      '0xDA343E876263D988DDD7C18Bb4aB288c7ef66D89',
      '0x1Ff0eB66355D4d3A1310FB759A8a67Efd58C888A'
    ]
  })

  it('gets accounts', function() {
    const gen = getAccounts({ web3 })

    let next = gen.next()
    assert.deepEqual(
      next.value,
      call(web3.eth.getAccounts),
      'must call getAccounts'
    )

    next = gen.next(accounts)
    assert.deepEqual(
      next.value,
      put({ type: 'ACCOUNTS_FETCHED', accounts }),
      'must dispatch accounts'
    )

    next = gen.next()
    assert.isUndefined(next.value, 'must be finished')
  })
})
