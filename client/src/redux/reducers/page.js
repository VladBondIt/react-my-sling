import { SET_HOME_PAGE } from "../types";

const initialState = {
    isHomePage: true

}
const search = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOME_PAGE:
            return {
                ...state,
                isHomePage: action.payload,
            }
        default:
            return state;
    }
}

export default search;