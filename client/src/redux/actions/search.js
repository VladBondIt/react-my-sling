import { SET_SEARCH_CHAR } from "../types";

export const setSearchChar = (searchChar) => ({
    type: SET_SEARCH_CHAR,
    payload: searchChar
});
