import { CLEAR_CART, SET_CART_ITEMS, MINUS_CART_ITEM, CANCEL_POSITION, SET_BASKET_ID, SET_CART_COUNTS_ID } from "../types";


export const setCartItems = (itemObj) => ({
    type: SET_CART_ITEMS,
    payload: itemObj
});
export const clearCart = () => ({
    type: CLEAR_CART,
});
export const minusCartItem = (itemId) => ({
    type: MINUS_CART_ITEM,
    payload: itemId
});
export const cancelPosition = (cancelItemId) => ({
    type: CANCEL_POSITION,
    payload: cancelItemId
});
export const setBasketId = (basketId) => ({
    type: SET_BASKET_ID,
    payload: basketId
});
export const setCartCountsId = (idsObj) => ({
    type: SET_CART_COUNTS_ID,
    payload: idsObj
});