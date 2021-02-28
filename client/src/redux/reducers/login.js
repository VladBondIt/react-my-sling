import { SET_AUTH, SET_USER } from "../types";

const initialState = {
    isAuth: false,
    user: false

}
const search = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.payload,
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state;
    }
}

export default search;