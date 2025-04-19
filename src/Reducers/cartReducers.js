const initialState = {
    data: []
}

export default function cartReducers(state = initialState, action) {
    switch(action.type) {
        case 'GET_CART': {
            return {  ...state, data: action.payload }
        }
        case 'ADD_TO_CART': {
            return { ...state , data: action.payload }
        }
        case 'REMOVE_LINEITEM': {
            const newTotalAmount = state.data.lineItems.filter(item => item.tourOption !== action.payload).reduce((sum, item) => sum + item.amount, 0)
            return { ...state, data: { ...state.data, lineItems: state.data.lineItems.filter(item => item.tourOption !== action.payload), totalAmount: newTotalAmount }}
        }
        case 'EMPTY_CART' : {
            return { ...state, data: { lineItems: [], totalAmount: 0 }}
        }
        default: {
            return { ...state }
        }
    }
}