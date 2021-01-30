import { SET_LOADING } from "../types";

const initialState = {
    loaderItems: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
    ],
    isLoading: true

}
const loader = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        default:
            return state;
    }
}

export default loader;