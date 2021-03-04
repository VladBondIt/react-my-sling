import React from 'react'
import { setActiveCategoryType } from '../redux/actions/categoryes';
import { useDispatch } from 'react-redux';


function CategoryItem({ name, activeTypeItem, id }) {

    const dispatch = useDispatch();


    const handlerClick = () => {
        dispatch(setActiveCategoryType(id))

    }

    const className = activeTypeItem !== id ? 'category__item btn' : 'category__item btn active';
    return (
        <li onClick={handlerClick} className={className}>
            {name}
            <svg className="category__svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"
                width="24">
                <path d="M10 17l5-5-5-5v10z" />
                <path d="M0 24V0h24v24H0z" fill="none" />
            </svg>
        </li>
    )
}

export default CategoryItem
