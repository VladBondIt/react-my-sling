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
        case CLEAR_CART:
            return {
                cartItems: [],
                countsIdItems: {},
                totalPrice: 0
            }
        case MINUS_CART_ITEM:

            let deletedItemIndex = null;

            for (let i = 0; i < state.cartItems.length; i++) {
                const element = state.cartItems[i];
                if (element.id === action.payload) {
                    deletedItemIndex = i;
                    break;
                }
            }

            const newSlicedItems = [
                ...state.cartItems.reduce((previousValue, currentValue, i) => {
                    if (deletedItemIndex !== i) {
                        previousValue.push(currentValue)
                    }
                    return previousValue;
                }, [])
            ]


            const totalPriceSliced = newSlicedItems.reduce((sum, obj) => sum + obj.price, 0);


            return {
                cartItems: newSlicedItems,
                countsIdItems: {
                    ...state.countsIdItems,
                    [action.payload]: state.countsIdItems[action.payload] - 1
                },
                totalPrice: totalPriceSliced
            }

        default:
            return state;
    }
}

export default cards;