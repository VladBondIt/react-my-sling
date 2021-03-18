import { SET_CART_ITEMS, CLEAR_CART, MINUS_CART_ITEM, CANCEL_POSITION, SET_BASKET_ID, ADD_CART_ITEM } from "../types";

const initialState = {
    cartItems: [],
    totalPrice: 0,
    totalCount: 0,
    basketId: false
}

const calcTotalCount = (arr) => {
    return arr.reduce((previousValue, currentValue) => {

        previousValue += currentValue.count;

        return previousValue;
    }, 0)
}

const calcTotalPrice = (arr) => {
    return arr.reduce((previousValue, currentValue) => {

        previousValue += (currentValue.price * currentValue.count)

        return previousValue;
    }, 0)
}



const cards = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_ITEMS:

            const totalPrice = calcTotalPrice(action.payload)
            const totalCount = calcTotalCount(action.payload)

            return {
                ...state,
                cartItems: action.payload,
                totalPrice: totalPrice,
                totalCount: totalCount
            }
        case CLEAR_CART:
            return {
                cartItems: [],
                totalPrice: 0,
                totalCount: 0,
                ...state.basketId
            }
        case SET_BASKET_ID:
            return {
                ...state,
                basketId: action.payload
            }
        case MINUS_CART_ITEM:

            const minusedItems = state.cartItems
                .map((value) => value.id === action.payload
                    ? { ...value, count: value.count - 1 }
                    : value
                )

            const totalCountMinused = calcTotalCount(minusedItems);
            const totalPriceMinused = calcTotalPrice(minusedItems);

            return {
                ...state,
                cartItems: minusedItems,
                totalPrice: totalPriceMinused,
                totalCount: totalCountMinused
            }

        case CANCEL_POSITION:

            const canceledItems = state.cartItems.filter((obj) => obj.id !== action.payload)

            const canceledCountsItems = Object.fromEntries(Object.entries(state.countsIdItems).filter((x) => x[0] !== (action.payload + '')))

            const totaleCountCanceled = calcTotalCount(canceledCountsItems);
            const totalePriceCanceled = calcTotalPrice(canceledItems, canceledCountsItems);


            return {
                ...state,
                cartItems: canceledItems,
                countsIdItems: canceledCountsItems,
                totalPrice: totalePriceCanceled,
                totalCount: totaleCountCanceled
            }
        case ADD_CART_ITEM:

            let countedItems = false;
            let newCartItems = false;

            if (state.cartItems.length > 0 && state.cartItems.some((value) => value.id === action.payload.id)) {
                countedItems = state.cartItems.map((value) => value.id === action.payload.id
                    ? { ...value, count: value.count + 1 }
                    : value)
            } else {
                newCartItems = [{ ...action.payload, count: 1 }]
            }

            const newArr = newCartItems ? [...state.cartItems, ...newCartItems] : countedItems

            const newTotalPrice = calcTotalPrice(newArr)
            const newTotalCount = calcTotalCount(newArr)

            return {

                ...state,
                cartItems: newArr,
                totalPrice: newTotalPrice,
                totalCount: newTotalCount
            }

        default:
            return state;
    }
}

export default cards;