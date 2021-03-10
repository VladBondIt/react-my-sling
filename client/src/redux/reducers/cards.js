import { SET_INFOS, SET_CARDS, SET_LOADING } from "../types";

const initialState = {
    cardItems: [],
    cardInfos: [],
    isLoaded: false,

}
const cards = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARDS:
            return {
                ...state,
                cardItems: action.payload,
            }
        case SET_INFOS:
            return {
                ...state,
                cardInfos: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                isLoaded: action.payload,
            }
        // case SET_FOUND_CARDS:
        //     return {
        //         ...state,
        //         foundCards: state.foundCards + 1,
        //     }
        // case CLEAR_FOUND_CARDS:
        //     return {
        //         ...state,
        //         foundCards: 0,
        //     }
        default:
            return state;
    }
}

export default cards;