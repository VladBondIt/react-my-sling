import { SET_CART_ITEMS, CLEAR_CART, MINUS_CART_ITEM } from "../types";

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

            const newCountsIdItems = {
                ...state.countsIdItems,
                [action.payload.id]: stateCount + 1
            }

            const uniqueArrPriceId = [...new Map(newItems.map(obj => [obj["id"], obj["price"]]))]


            const totalPrice = uniqueArrPriceId.reduce((previousValue, currentValue) => {
                previousValue += (currentValue[1] * newCountsIdItems[currentValue[0]])
                return previousValue;
            }, 0)



            return {
                ...state,
                cartItems: newItems,
                countsIdItems: newCountsIdItems,
                totalPrice: totalPrice
            }
        case CLEAR_CART:
            return {
                cartItems: [],
                countsIdItems: {},
                totalPrice: 0
            }
        case MINUS_CART_ITEM:

            const countsIdItemsMinused = {
                ...state.countsIdItems,
                [action.payload]: state.countsIdItems[action.payload] - 1
            }


            const totalPriceMinused = [...new Map(state.cartItems.map(obj => [obj["id"], obj["price"]]))]
                .reduce((previousValue, currentValue) => {
                    previousValue += (currentValue[1] * countsIdItemsMinused[currentValue[0]])
                    return previousValue;
                }, 0)



            return {
                ...state,
                countsIdItems: countsIdItemsMinused,
                totalPrice: totalPriceMinused
            }

        default:
            return state;
    }
}

export default cards;