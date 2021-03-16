import { LIMIT } from "../../services/limit";
import { SET_INFOS, SET_CARDS, SET_LOADING, SET_ACTIVE_PAGE, SET_TOTAL_COUNT, SET_CARD_LIMIT } from "../types";

const initialState = {
    cardItems: [],
    cardInfos: [],
    isLoaded: false,
    limit: LIMIT,
    activePage: 1,
    totalCount: 0

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
        case SET_ACTIVE_PAGE:
            return {
                ...state,
                activePage: action.payload,
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload,
            }
        case SET_CARD_LIMIT:
            return {
                ...state,
                limit: action.payload,
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