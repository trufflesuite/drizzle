import { call, put, takeLatest } from 'redux-saga/effects'
var Web3 = require('web3')

function initializeWeb3() {
  var web3

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof window.web3 !== 'undefined') {
    // Use Mist/MetaMask's provider.
    web3 = new Web3(window.web3.currentProvider)

    console.log('Injected web3 detected.')
  } else {
    // Fallback to localhost if no web3 injection.

    var provider = new Web3.providers.WebsocketProvider('ws://127.0.0.1:8546')

    web3 = new Web3(provider)

    console.log('No web3 instance injected, using Local web3.')
  }

  return web3
}

function* callInitializeWeb3(action) {
  const web3 = yield call(initializeWeb3)

  if (typeof web3 === 'undefined') {
    yield put({type: 'WEB3_FAILED'})
    yield call(action.reject, {source: 'web3', message: 'Web3 failed to initialize.'})
  }

  yield put({type: 'WEB3_INITIALIZED', web3})
  yield call(action.resolve)
}

function* web3Saga() {
  yield takeLatest('WEB3_INITIALIZING', callInitializeWeb3)
}

export default web3Saga;
