import { SET_HOME_PAGE } from "../types";

export const setHomePage = (boolean) => ({
    type: SET_HOME_PAGE,
    payload: boolean
});