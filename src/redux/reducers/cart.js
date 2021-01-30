import { SET_CART_ITEMS } from "../types";

const initialState = {
    cartItems: [],

}
const cards = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_ITEMS:
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    action.payload = {
                        ...action.payload,
                        dataForKey: Date.now().toString(16)
                    }
                ],
            }
        default:
            return state;
    }
}

export default cards;