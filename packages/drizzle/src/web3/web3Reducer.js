const initialState = {}

const web3Reducer = (state = initialState, action) => {
  if (action.type === 'WEB3_INITIALIZED')
  {
    return Object.assign({}, state, action.web3)
  }

  return state
}

export default web3Reducer
