import { CLEAR_CART, SET_CART_ITEMS, MINUS_CART_ITEM } from "../types";


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