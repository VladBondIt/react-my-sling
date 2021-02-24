import { GET_CATEGORYES, SET_ACTIVE_CATEGORY } from "../types";


export const setCategoryes = (items) => ({
    type: GET_CATEGORYES,
    payload: items
});
export const setActiveCategory = (id) => ({
    type: SET_ACTIVE_CATEGORY,
    payload: id
});
