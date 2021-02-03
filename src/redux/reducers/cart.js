import { SET_CART_ITEMS, CLEAR_CART, MINUS_CART_ITEM } from "../types";

const initialState = {
    cartItems: [],
    countsIdItems: {},
    totalPrice: 0,
    totalCount: 0
}

const calcTotalCount = (obj) => {
    return Object.values(obj).reduce((previousValue, currentValue) => {
        previousValue += currentValue;

        return previousValue;
    }, 0)
}

const calcTotalPrice = (arr, obj) => {
    return arr.reduce((previousValue, currentValue) => {
        previousValue += (currentValue.price * obj[currentValue.id])
        return previousValue;
    }, 0)
}



const cards = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_ITEMS:

            const stateCount = !state.countsIdItems[action.payload.id]
                ? 0
                : state.countsIdItems[action.payload.id];

            let newItems = null;

            state.cartItems.length > 0
                ? state.cartItems.some((obj) => obj.id === action.payload.id)
                    ? newItems = [
                        ...state.cartItems
                    ]
                    : newItems = [
                        ...state.cartItems,
                        action.payload
                    ]
                : newItems = [
                    ...state.cartItems,
                    action.payload
                ]

            const newCountsIdItems = {
                ...state.countsIdItems,
                [action.payload.id]: stateCount + 1
            };

            const totalCount = calcTotalCount(newCountsIdItems);


            const totalPrice = calcTotalPrice(newItems, newCountsIdItems);



            return {
                ...state,
                cartItems: newItems,
                countsIdItems: newCountsIdItems,
                totalPrice: totalPrice,
                totalCount: totalCount
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
            };

            const totalCountMinused = calcTotalCount(countsIdItemsMinused);

            const totalPriceMinused = calcTotalPrice(state.cartItems, countsIdItemsMinused);



            return {
                ...state,
                countsIdItems: countsIdItemsMinused,
                totalPrice: totalPriceMinused,
                totalCount: totalCountMinused
            }

        default:
            return state;
    }
}

export default cards;