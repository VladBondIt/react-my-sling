import { SET_CART_ITEMS, CLEAR_CART, MINUS_CART_ITEM, CANCEL_POSITION, SET_BASKET_ID, SET_CART_COUNTS_ID } from "../types";

const initialState = {
    cartItems: [],
    countsIdItems: [],
    totalPrice: 0,
    totalCount: 0,
    basketId: false
}

const calcTotalCount = (arr) => {
    return arr.reduce((previousValue, currentValue) => {

        previousValue += Number(Object.values(currentValue));

        return previousValue;
    }, 0)
}

const calcTotalPrice = (arr, countsArr) => {
    return arr.reduce((previousValue, currentValue) => {

        previousValue += (currentValue.price * countsArr.filter((value) => value['id' + currentValue.id])[0]['id' + currentValue.id])

        return previousValue;
    }, 0)
}



const cards = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_ITEMS:

            console.log(action.payload)

            const totalPrice = calcTotalPrice(action.payload, state.countsIdItems);

            return {
                ...state,
                cartItems: action.payload,
                totalPrice: totalPrice,
            }
        case CLEAR_CART:
            return {
                cartItems: [],
                countsIdItems: {},
                totalPrice: 0,
                totalCount: 0
            }
        case SET_BASKET_ID:
            return {
                ...state,
                basketId: action.payload
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
        case SET_CART_COUNTS_ID:

            const newCountsIdItems = action.payload.reduce((acc, currentValue) => {

                if (acc.length !== 0 && acc.some((value) => value['id' + currentValue.itemId])) {
                    acc.forEach((value) => {
                        if (Object.keys(value)[0] === `id${currentValue.itemId}`) {
                            value['id' + currentValue.itemId] += 1
                        }
                    })
                } else {
                    acc.push({
                        ['id' + currentValue.itemId]: 1
                    })

                }

                return acc;
            }, [])

            const newTotalCount = calcTotalCount(newCountsIdItems)

            return {

                ...state,
                countsIdItems: newCountsIdItems,
                totalCount: newTotalCount
            }

        default:
            return state;
    }
}

export default cards;