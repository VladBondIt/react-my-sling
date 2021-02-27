import { SET_AUTH } from "../types";

export const setAuth = (boolean) => ({
    type: SET_AUTH,
    payload: boolean
});