const initialState = {}

const blocksReducer = (state = initialState, action) => {
  if (action.type === 'BLOCK_PROCESSING') {
    return action.block
  }

  return state
}

export default blocksReducer
