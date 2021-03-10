import React from 'react'
import { useDispatch } from 'react-redux'
import { setActivePage } from '../redux/actions/cards'
import { setActiveCategoryBrand } from '../redux/actions/categoryes'

function BrandItem({ id, name, activeBrandItem }) {
    const dispatch = useDispatch()

    let itemClassName = "brand__item shd btn"
    itemClassName += activeBrandItem === id ? " active" : ""

    const handlerBrand = () => {
        dispatch(setActiveCategoryBrand(id))
        dispatch(setActivePage(1))
    }

    return (
        <li
            onClick={handlerBrand}
            className={itemClassName}>
            {name}
        </li>
    )
}

export default BrandItem
