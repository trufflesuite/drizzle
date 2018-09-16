import { getAccounts } from '../src/accounts/accountsSaga'
import { runSaga } from 'redux-saga'
import Ganache from 'ganache-cli'
import Web3 from 'web3'
import { assert } from 'chai'

describe('Accounts Saga', function() {
  var provider
  var web3

  var dispatchedActions
  var store

  before('Create Provider', async function() {
    provider = Ganache.provider({ seed: 'drizzle', gasLimit: 7000000 })
    web3 = new Web3(provider)

    dispatchedActions = []
    store = {
      getState: () => {},
      dispatch: action => dispatchedActions.push(action)
    }
  })

  it('gets accounts', async function(assert) {
    await runSaga(store, getAccounts, { web3 }).done

    console.log(dispatchedActions[0])

    assert(dispatchedActions[0]['accounts'].length === 10)
  })
})
