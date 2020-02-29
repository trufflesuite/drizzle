import * as BlocksActions from './constants'

const initialState = {}

const blocksReducer = (state = initialState, action) => {
  if (action.type === BlocksActions.BLOCK_PROCESSING) {
    return action.block
  }

  return state
}

export default blocksReducer
