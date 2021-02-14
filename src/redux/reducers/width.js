import { SET_INNER_WIDTH } from "../types";

const initialState = {
    innerWidth: false

}
const width = (state = initialState, action) => {
    switch (action.type) {
        case SET_INNER_WIDTH:
            return {
                ...state,
                innerWidth: action.payload
            }
        default:
            return state;
    }
}

export default width;