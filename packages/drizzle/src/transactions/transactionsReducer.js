const initialState = {}
  
const transactionsReducer = (state = initialState, action) => {
    if (action.type === 'TX_BROADCASTED')
    {
        return {
            ...state,
            [action.txHash]: {
                status: 'pending',
                confirmations: []
            }
        }
    }

    if (action.type === 'TX_CONFIRMAITON')
    {
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

    if (action.type === 'TX_SUCCESSFUL')
    {
        return {
            ...state,
            [action.txHash]: {
                ...state[action.txHash],
                status: 'success',
                receipt: action.receipt
            }
        }
    }


    if (action.type === 'TX_ERROR')
    {
        return {
            ...state,
            [action.txHash]: {
                ...state[action.txHash],
                status: 'error',
                error: action.error
            }
        }
    }

    return state
}

export default transactionsReducer
