import { CLEAR_CART, SET_CART_ITEMS, MINUS_CART_ITEM, CANCEL_POSITION, SET_BASKET_ID, ADD_CART_ITEM } from "../types";


export const setCartItems = (itemArr) => ({
    type: SET_CART_ITEMS,
    payload: itemArr
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
export const addCartItem = (itemObj) => ({
    type: ADD_CART_ITEM,
    payload: itemObj
});