import { SET_CART_ITEMS } from "../types";

const initialState = {
    cartItems: [],

}
const cards = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_ITEMS:
            let countedObj = false;

            const newObj = state.cartItems.length > 0
                ? state.cartItems
                    .forEach((item) => item.id === action.payload.id
                        ? countedObj = { ...item, count: item.count + 1 }
                        : countedObj = action.payload)
                : action.payload;

            let insertObj = null;

            if (countedObj) {
                insertObj = countedObj;
            } else {
                insertObj = newObj;
            }

            const newItem = [
                ...state.cartItems,
                insertObj
            ]

            return {
                ...state,
                cartItems: newItem,
            }
        default:
            return state;
    }
}

export default cards;