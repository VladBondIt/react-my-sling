import { SET_CATEGORY_TYPES, SET_ACTIVE_CATEGORY_TYPE, SET_CATEGORY_BRANDS, SET_ACTIVE_CATEGORY_BRAND } from "../types";


export const setCategoryTypes = (typeItems) => ({
    type: SET_CATEGORY_TYPES,
    payload: typeItems
});
export const setCategoryBrands = (brandItems) => ({
    type: SET_CATEGORY_BRANDS,
    payload: brandItems
});
export const setActiveCategoryType = (idType) => ({
    type: SET_ACTIVE_CATEGORY_TYPE,
    payload: idType
});
export const setActiveCategoryBrand = (idBrand) => ({
    type: SET_ACTIVE_CATEGORY_BRAND,
    payload: idBrand
});
