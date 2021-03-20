import { SET_MODAL, SET_MODAL_TYPE, SET_CANCEL_ID, SET_ADMIN_MODAL_TYPE, SET_ADMIN_MODAL } from "../types";

const initialState = {
    modalShow: false,
    typeModal: null,
    cancelId: null,
    adminTypeModal: null,
    adminModalShow: false

}
const modal = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODAL:
            return {
                ...state,
                modalShow: action.payload,
            }
        case SET_ADMIN_MODAL:
            return {
                ...state,
                adminModalShow: action.payload,
            }
        case SET_MODAL_TYPE:
            return {
                ...state,
                typeModal: action.payload,
            }
        case SET_ADMIN_MODAL_TYPE:
            return {
                ...state,
                adminTypeModal: action.payload,
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