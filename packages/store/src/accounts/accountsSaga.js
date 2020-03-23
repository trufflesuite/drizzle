import { END, eventChannel } from 'redux-saga'
import { call, put, take, takeLatest } from 'redux-saga/effects'
import { getAccountBalances } from '../accountBalances/accountBalancesSaga'
import * as AccountsActions from './constants'

/*
 * Fetch Accounts List
 */

export function * getAccounts (action) {
  const web3 = action.web3

  try {
    const accounts = yield call(web3.eth.getAccounts)

    if (!accounts) {
      throw 'No accounts found!'
    }

    yield put({ type: AccountsActions.ACCOUNTS_FETCHED, accounts })
  } catch (error) {
    yield put({ type: AccountsActions.ACCOUNTS_FAILED, error })
    console.error('Error fetching accounts:')
    console.error(error)
  }
}

/*
 * Poll for Account Changes
 */

function * createAccountsPollChannel ({ interval, web3 }) {
  return eventChannel(emit => {
    const persistedWeb3 = web3

    const accountsPoller = setInterval(() => {
      emit({ type: AccountsActions.SYNCING_ACCOUNTS, persistedWeb3 })
    }, interval) // options.polls.accounts

    const unsubscribe = () => {
      clearInterval(accountsPoller)
    }

    return unsubscribe
  })
}

function * callCreateAccountsPollChannel ({ interval, web3 }) {
  const accountsChannel = yield call(createAccountsPollChannel, {
    interval,
    web3
  })

  try {
    while (true) {
      var event = yield take(accountsChannel)

      if (event.type === AccountsActions.SYNCING_ACCOUNTS) {
        yield call(getAccounts, { web3: event.persistedWeb3 })
        yield call(getAccountBalances, { web3: event.persistedWeb3 })
      }

      yield put(event)
    }
  } finally {
    accountsChannel.close()
  }
}

function * accountsSaga () {
  yield takeLatest(AccountsActions.ACCOUNTS_FETCHING, getAccounts)
  yield takeLatest(AccountsActions.ACCOUNTS_POLLING, callCreateAccountsPollChannel)
}

export default accountsSaga
