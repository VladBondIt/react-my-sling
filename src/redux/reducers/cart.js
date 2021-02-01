import { SET_CART_ITEMS } from "../types";

const initialState = {
    cartItems: [],
    countsIdItems: {},
}
const cards = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_ITEMS:
            const stateCount = !state.countsIdItems[action.payload.id] ? 0 : state.countsIdItems[action.payload.id]

            console.log(state.countsIdItems)

            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    action.payload
                ],
                countsIdItems: {
                    ...state.countsIdItems,
                    [action.payload.id]: stateCount + 1
                }
            }
        default:
            return state;
    }
}

export default cards;