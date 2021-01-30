import { SET_CART_ITEMS } from "../types";


export const setCartItems = (itemObj) => ({
    type: SET_CART_ITEMS,
    payload: itemObj
});