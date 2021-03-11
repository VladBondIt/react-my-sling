import { SET_SEARCH_CHAR } from "../types";

const initialState = {
    searchChar: ''

}
const search = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_CHAR:
            return {
                ...state,
                searchChar: action.payload === '' ? '' : action.payload,
            }
        default:
            return state;
    }
}

export default search;