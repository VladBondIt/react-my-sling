import { SET_AUTH, SET_USER } from "../types";

export const setAuth = (boolean) => ({
    type: SET_AUTH,
    payload: boolean
});
export const setUser = (userObj) => ({
    type: SET_USER,
    payload: userObj
});