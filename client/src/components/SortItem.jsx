import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCards, setTotalCount } from '../redux/actions/cards';
import itemService from '../services/itemService'

function SortItem({ value, setSortName, sortName }) {
    const dispatch = useDispatch();

    const { activeTypeItem, limit, activePage, activeBrandItem } = useSelector(state => ({
        ...state.categoryes,
        ...state.cards,
    }))

    const [sortDirection, setSortDirection] = useState('ASC')

    const handlerItem = async (e) => {

        console.log(e.target.classList[1] === 'active' && sortDirection === 'ASC')

        if (e.target.classList[1] === 'active' && sortDirection === 'ASC') {
            setSortDirection('DESC')
        } else {
            setSortDirection('ASC')
        }



        setSortName(value)
        const { count, rows } = await itemService.getItems(activeTypeItem, activeBrandItem, activePage, limit, value, sortDirection)

        dispatch(setTotalCount(count))
        dispatch(setCards(rows))
    }

    console.log(sortDirection);



    return (
        <li
            onClick={handlerItem}
            className={value === sortName ? "sort__item active" : "sort__item"}>
            {value} {sortDirection === 'ASC' ? 'По возрастанию' : 'По убыванию'}</li>
    )
}

export default SortItem
