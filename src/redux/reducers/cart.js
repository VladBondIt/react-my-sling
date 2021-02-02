import { SET_CART_ITEMS } from "../types";

const initialState = {
    cartItems: [],
    countsIdItems: {},
    totalPrice: 0
}
const cards = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_ITEMS:
            const stateCount = !state.countsIdItems[action.payload.id]
                ? 0
                : state.countsIdItems[action.payload.id];

            const newItems = [
                ...state.cartItems,
                action.payload
            ]

            console.log(state.countsIdItems)
            const totalPrice = newItems.reduce((sum, obj) => sum + obj.price, 0);

            return {
                ...state,
                cartItems: newItems,
                countsIdItems: {
                    ...state.countsIdItems,
                    [action.payload.id]: stateCount + 1
                },
                totalPrice: totalPrice
            }
        default:
            return state;
    }
}

export default cards;