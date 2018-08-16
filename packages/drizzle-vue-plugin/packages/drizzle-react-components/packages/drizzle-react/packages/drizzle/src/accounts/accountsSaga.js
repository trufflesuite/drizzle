import { END, eventChannel } from 'redux-saga'
import { call, put, take, takeLatest } from 'redux-saga/effects'
import { getAccountBalances } from '../accountBalances/accountBalancesSaga'

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

    yield put({ type: 'ACCOUNTS_FETCHED', accounts })
  } catch (error) {
    yield put({ type: 'ACCOUNTS_FAILED', error })
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
      emit({ type: 'SYNCING_ACCOUNTS', persistedWeb3 })
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

      if (event.type === 'SYNCING_ACCOUNTS') {
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
  yield takeLatest('ACCOUNTS_FETCHING', getAccounts)
  yield takeLatest('ACCOUNTS_POLLING', callCreateAccountsPollChannel)
}

export default accountsSaga
