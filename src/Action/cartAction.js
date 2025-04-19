export const startGetCart = () => {
    return async (dispatch) => {
        try {
            const cart = JSON.parse(localStorage.getItem("cart"))
            // const cart = localStorage.getItem("cart")
            if(cart) {
                dispatch(getCart(cart))
            }
        } catch(err) {
            console.log(err)
        }
    }
}

const getCart = (cart) => {
    return {
        type: "GET_CART",
        payload: cart
    }
}

export const startRemoveLineItem = (tourOption) => {
    return async (dispatch) => {
        try {
            dispatch(removeLineItem(tourOption))
        } catch(err) {
            console.log(err)
        }
    }
}

const removeLineItem = (tourOption) => {
    return {
        type: "REMOVE_LINEITEM",
        payload: tourOption
    }
}

export const startEmptyCart = () => {
    return async (dispatch) => {
        try {
            dispatch(emptyCart())
        } catch(err) {
            console.log(err)
        }
    }
}

const emptyCart = () => {
    return {
        type: "EMPTY_CART",
    }
}