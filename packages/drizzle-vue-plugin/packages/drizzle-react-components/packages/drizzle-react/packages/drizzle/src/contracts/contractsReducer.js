const initialState = {}

const contractsReducer = (state = initialState, action) => {
  if (action.type === 'INITIALIZED_CONTRACT') {
    return Object.assign({}, state, {
      [action.contractInfo.name]: action.contractInfo.contract
    })
  }

  if (action.type === 'GOT_CONTRACT_VAR') {
    return Object.assign({}, state, {
      [action.contractInfo.name]: action.contractInfo.contract
    })
  }

  if (action.type === 'UPDATE_CONTRACT') {
    return Object.assign({}, state, {
      [action.contractInfo.name]: action.contractInfo.contract
    })
  }

  return state
}

export default contractsReducer
