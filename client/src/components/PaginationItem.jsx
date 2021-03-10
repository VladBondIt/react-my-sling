import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActivePage } from '../redux/actions/cards';

function PaginationItem({ item }) {
    const dispatch = useDispatch();
    const activePage = useSelector(({ cards }) => cards.activePage)

    let itemClassName = "pagination__item shd btn"
    itemClassName += activePage === item ? " active" : ""

    const handlerPagination = () => {
        dispatch(setActivePage(item))
    }

    return (
        <li
            onClick={handlerPagination}
            className={itemClassName}>{item}</li>
    )
}

export default PaginationItem
