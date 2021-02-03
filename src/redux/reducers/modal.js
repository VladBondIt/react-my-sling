import { SET_MODAL, SET_MODAL_TYPE } from "../types";

const initialState = {
    cartModalShow: false,
    typeModal: null

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
        default:
            return state;
    }
}

export default modal;