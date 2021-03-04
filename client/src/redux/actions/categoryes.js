import { SET_CATEGORY_TYPES, SET_ACTIVE_CATEGORY_TYPE, SET_CATEGORY_BRANDS, SET_ACTIVE_CATEGORY_BRAND } from "../types";


export const setCategoryTypes = (typeItems) => ({
    type: SET_CATEGORY_TYPES,
    payload: typeItems
});
export const setCategoryBrands = (typeItems) => ({
    type: SET_CATEGORY_BRANDS,
    payload: typeItems
});
export const setActiveCategoryType = (id) => ({
    type: SET_ACTIVE_CATEGORY_TYPE,
    payload: id
});
export const setActiveCategoryBrand = (id) => ({
    type: SET_ACTIVE_CATEGORY_BRAND,
    payload: id
});
