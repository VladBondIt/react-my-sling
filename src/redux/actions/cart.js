import { CLEAR_CART, SET_CART_ITEMS, MINUS_CART_ITEM, CANCEL_POSITION } from "../types";


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