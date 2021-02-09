import { GET_CARDS, SET_FOUND_CARDS, CLEAR_FOUND_CARDS } from "../types";
import { setLoading } from "./loader";

export const getCards = (items) => ({
    type: GET_CARDS,
    payload: items
});

export const fetchedCards = (category = "Май слинг", sortBy, orderSort) => async dispatch => {
    const apiUrl = 'https://my-json-server.typicode.com/VladBondIt/FakeDBjson/slings';
    const categoryUrl = `?category=${category}`;
    // const sortUrl = `&_sort=${sortBy}&_order=${orderSort}`;

    dispatch(setLoading(true))


    const res = await fetch(`${apiUrl}${categoryUrl}`);
    if (!res.ok) {
        throw new Error(`Could not fetch ${apiUrl}` +
            `, received ${res.status}`);
    }

    const data = await res.json();

    dispatch(getCards(data));
    dispatch(setLoading(false))

}

export const setFoundCard = () => ({
    type: SET_FOUND_CARDS,
});

export const clearFoundCards = () => ({
    type: CLEAR_FOUND_CARDS,
});