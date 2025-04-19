import { createStore,combineReducers, applyMiddleware  } from "redux";
import { thunk } from "redux-thunk";
import cartReducers from "../Reducers/cartReducers";
import customerReducers from "../Reducers/customerReducers";

const configureStore = () => {
    const store = createStore(combineReducers({
        cart: cartReducers,
        customer: customerReducers,
    }), applyMiddleware(thunk))

    return store
}

export default configureStore;