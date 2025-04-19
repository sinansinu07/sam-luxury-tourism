export const startGetCustomer = () => {
    return async (dispatch) => {
        try {
            const customerDetails = JSON.parse(localStorage.getItem("customerDetails"))
            // const cart = localStorage.getItem("cart")
            console.log(customerDetails)
            if(customerDetails) {
                dispatch(getCustomer(customerDetails))
            }
        } catch(err) {
            console.log(err)
        }
    }
}

const getCustomer = (customerDetails) => {
    return {
        type: "GET_CUSTOMER",
        payload: customerDetails
    }
}