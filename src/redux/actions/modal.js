import { SET_MODAL, SET_MODAL_TYPE, SET_CANCEL_ID } from "../types";

export const setModalShow = (boolean) => ({
    type: SET_MODAL,
    payload: boolean
});
export const setModalType = (num) => ({
    type: SET_MODAL_TYPE,
    payload: num
});
export const setCancelId = (cancelId) => ({
    type: SET_CANCEL_ID,
    payload: cancelId
});
