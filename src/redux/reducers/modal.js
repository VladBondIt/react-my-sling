import { SET_MODAL, SET_MODAL_TYPE, SET_CANCEL_ID } from "../types";

const initialState = {
    cartModalShow: false,
    typeModal: null,
    cancelId: null

}
const modal = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODAL:
            return {
                ...state,
                cartModalShow: action.payload,
            }
        case SET_MODAL_TYPE:
            return {
                ...state,
                typeModal: action.payload,
            }
        case SET_CANCEL_ID:
            return {
                ...state,
                cancelId: action.payload,
            }
        default:
            return state;
    }
}

export default modal;