import { SET_AUTH } from "../types";

const initialState = {
    isAuth: false

}
const search = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.payload,
            }
        default:
            return state;
    }
}

export default search;