import { SET_MODAL, SET_MODAL_TYPE, SET_CANCEL_ID, SET_ADMIN_MODAL_TYPE, SET_ADMIN_MODAL, SET_SHOW_SORT_POPUP } from "../types";

export const setModalShow = (boolean) => ({
    type: SET_MODAL,
    payload: boolean
});
export const setModalType = (num) => ({
    type: SET_MODAL_TYPE,
    payload: num
});
export const setAdminModalType = (num) => ({
    type: SET_ADMIN_MODAL_TYPE,
    payload: num
});
export const setAdminModalShow = (adminBoolean) => ({
    type: SET_ADMIN_MODAL,
    payload: adminBoolean
});
export const setCancelId = (cancelId) => ({
    type: SET_CANCEL_ID,
    payload: cancelId
});
export const setSortPopupShow = (showBool) => ({
    type: SET_SHOW_SORT_POPUP,
    payload: showBool
});
