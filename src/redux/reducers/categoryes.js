import { GET_CATEGORYES, SET_ACTIVE_CATEGORY } from '../types'

const initialState = {
    items: [],
    activeItem: 0,

}
const categoryes = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORYES:
            return {
                ...state,
                items: action.payload,
                activeItem: action.payload[0].id
            }
        case SET_ACTIVE_CATEGORY:
            return {
                ...state,
                activeItem: action.payload
            }
        default:
            return state;
    }
}

export default categoryes;