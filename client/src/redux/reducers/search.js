import { SET_SEARCH_CHAR } from "../types";

const initialState = {
    searchChar: null

}
const search = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_CHAR:
            return {
                ...state,
                searchChar: action.payload === '' ? null : action.payload,
            }
        default:
            return state;
    }
}

export default search;