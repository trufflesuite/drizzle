import * as TransactionsActions from './constants'

const initialState = []

const transactionStackReducer = (state = initialState, action) => {
  if (action.type === TransactionsActions.PUSH_TO_TXSTACK) {
    return [...state, action.stackTempKey]
  }

  if (action.type === TransactionsActions.POP_FROM_TXSTACK) {
    state.pop()

    return [...state]
  }

  if (action.type === TransactionsActions.TX_BROADCASTED) {
    state[action.stackId] = action.txHash

    return [...state]
  }

  return state
}

export default transactionStackReducer
