import { SET_ACTIVE_PAGE, SET_CARDS, SET_INFOS, SET_TOTAL_COUNT } from "../types";

export const setCards = (items) => ({
    type: SET_CARDS,
    payload: items
});
export const setInfoCards = (arrInfo) => ({
    type: SET_INFOS,
    payload: arrInfo
});
export const setActivePage = (num) => ({
    type: SET_ACTIVE_PAGE,
    payload: num
});
export const setTotalCount = (numCount) => ({
    type: SET_TOTAL_COUNT,
    payload: numCount
});


// export const fetchedCards = (category = "Май слинг", sortBy, orderSort) => async dispatch => {
//     const apiUrl = 'https://my-json-server.typicode.com/VladBondIt/FakeDBjson/slings';
//     const categoryUrl = `?category=${category}`;
//     // const sortUrl = `&_sort=${sortBy}&_order=${orderSort}`;

//     dispatch(setLoading(true))


//     const res = await fetch(`${apiUrl}${categoryUrl}`);
//     if (!res.ok) {
//         throw new Error(`Could not fetch ${apiUrl}` +
//             `, received ${res.status}`);
//     }

//     const data = await res.json();

//     dispatch(setCards(data));
//     dispatch(setLoading(false))

// }

// export const setFoundCard = () => ({
//     type: SET_FOUND_CARDS,
// });

// export const clearFoundCards = () => ({
//     type: CLEAR_FOUND_CARDS,
// });