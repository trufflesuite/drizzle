import * as TransactionsActions from './constants'

const initialState = {}

const transactionsReducer = (state = initialState, action) => {
  if (action.type === TransactionsActions.TX_BROADCASTED) {
    return {
      ...state,
      [action.txHash]: {
        status: 'pending',
        confirmations: []
      }
    }
  }

  if (action.type === TransactionsActions.TX_CONFIRMATION) {
    return {
      ...state,
      [action.txHash]: {
        ...state[action.txHash],
        confirmations: [
          ...state[action.txHash].confirmations,
          action.confirmationReceipt
        ]
      }
    }
  }

  if (action.type === TransactionsActions.TX_SUCCESSFUL) {
    return {
      ...state,
      [action.txHash]: {
        ...state[action.txHash],
        status: 'success',
        receipt: action.receipt
      }
    }
  }

  if (action.type === TransactionsActions.TX_ERROR) {
    return {
      ...state,
      [action.stackTempKey]: {
        ...state[action.stackTempKey],
        status: 'error',
        error: {
          message: action.error && action.error.message
        }
      }
    }
  }

  return state
}

export default transactionsReducer
