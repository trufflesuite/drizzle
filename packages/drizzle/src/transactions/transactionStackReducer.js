const initialState = []

const transactionStackReducer = (state = initialState, action) => {
  if (action.type === 'PUSH_TO_TXSTACK') {
    return [...state, action.stackTempKey]
  }

  if (action.type === 'POP_FROM_TXSTACK') {
    state.pop()

    return [...state]
  }

  if (action.type === 'TX_BROADCASTED') {
    state[action.stackId] = action.txHash

    return [...state]
  }

  return state
}

export default transactionStackReducer
