import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCards, setTotalCount } from '../redux/actions/cards';
import itemService from '../services/itemService'

function SortItem({ value, setSortName, sortName }) {
    const dispatch = useDispatch();

    const { activeTypeItem, limit, activePage, activeBrandItem } = useSelector(state => ({
        ...state.categoryes,
        ...state.cards,
    }))

    const [sortDirection, setSortDirection] = useState(true)
    const [sortText, setSortText] = useState('')

    const handlerItem = async (e) => {


        setSortDirection(!sortDirection)

        let dir = ''

        setSortName(value)
        if (sortDirection) {
            dir = "ASC"
        } else {
            dir = "DESC"

        }
        const { count, rows } = await itemService.getItems(activeTypeItem, activeBrandItem, activePage, limit, value, dir)

        dispatch(setTotalCount(count))
        dispatch(setCards(rows))
    }

    useEffect(() => {
        if (value === sortName) {
            if (sortDirection) {
                setSortText('убыв.')
            } else {
                setSortText('возрас.')
            }
        } else {
            setSortText('')
        }
    }, [sortName, sortDirection, value])




    return (
        <li
            onClick={handlerItem}
            className={value === sortName ? "sort__item active" : "sort__item"}>
            {value} {sortText}</li>
    )
}

export default SortItem
