import { GET_CARDS, SET_LOADING } from "../types";

const initialState = {
    cardItems: [],
    isLoaded: false

}
const cards = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARDS:
            return {
                ...state,
                cardItems: action.payload,
            }
        case SET_LOADING:
            return {
                ...state,
                isLoaded: action.payload,
            }
        default:
            return state;
    }
}

export default cards;