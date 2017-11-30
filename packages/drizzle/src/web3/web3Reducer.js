const initialState = {
  status: ''
}

const web3Reducer = (state = initialState, action) => {
  if (action.type === 'WEB3_INITIALIZING')
  {
    return {
      ...state,
      status: 'initializing'
    }
  }

  if (action.type === 'WEB3_INITIALIZED')
  {
    return {
      ...state,
      status: 'initialized'
    }
  }

  if (action.type === 'WEB3_FAILED')
  {
    return {
      ...state,
      status: 'failed'
    }
  }

  return state
}

export default web3Reducer
