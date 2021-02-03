import { SET_MODAL, SET_MODAL_TYPE } from "../types";

export const setModalShow = (boolean) => ({
    type: SET_MODAL,
    payload: boolean
});
export const setModalType = (num) => ({
    type: SET_MODAL_TYPE,
    payload: num
});
