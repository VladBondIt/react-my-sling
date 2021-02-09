import { GET_CARDS, SET_FOUND_CARDS, SET_LOADING, CLEAR_FOUND_CARDS } from "../types";

const initialState = {
    cardItems: [],
    isLoaded: false,
    foundCards: 0

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
        case SET_FOUND_CARDS:
            return {
                ...state,
                foundCards: state.foundCards + 1,
            }
        case CLEAR_FOUND_CARDS:
            return {
                ...state,
                foundCards: 0,
            }
        default:
            return state;
    }
}

export default cards;