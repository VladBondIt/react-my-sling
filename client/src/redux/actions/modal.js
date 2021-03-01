import { SET_MODAL, SET_MODAL_TYPE, SET_CANCEL_ID, SET_PREVIEW_OBJECT, SET_ADMIN_MODAL_TYPE, SET_ADMIN_MODAL } from "../types";

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
export const setPreviewObj = (previewObj) => ({
    type: SET_PREVIEW_OBJECT,
    payload: previewObj
});
