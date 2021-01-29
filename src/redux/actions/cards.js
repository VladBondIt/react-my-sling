import { GET_CARDS, SET_LOADING } from "../types";

export const getCards = (items) => ({
    type: GET_CARDS,
    payload: items
});
export const setLoading = (boolean) => ({
    type: SET_LOADING,
    payload: boolean
});

export const fetchedCards = (category, sortBy, orderSort) => async dispatch => {
    const apiUrl = 'http://localhost:3001/slings';
    const categoryUrl = `?category=${category}`;
    // const sortUrl = `&_sort=${sortBy}&_order=${orderSort}`;

    dispatch(setLoading(false))


    const res = await fetch(`${apiUrl}${categoryUrl}`);
    if (!res.ok) {
        throw new Error(`Could not fetch ${apiUrl}` +
            `, received ${res.status}`);
    }

    const data = await res.json();

    console.log(data)

    dispatch(getCards(data));
}