import { SET_LOADING } from "../types";

export const setLoading = (boolean) => ({
    type: SET_LOADING,
    payload: boolean
});
