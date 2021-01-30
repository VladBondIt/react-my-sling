import React from 'react'
import { setActiveCategory } from '../redux/actions/categoryes';
import { useDispatch } from 'react-redux';
import { fetchedCards } from '../redux/actions/cards';


function CategoryItem({ category, activeItem, id }) {

    const dispatch = useDispatch();


    const handleClick = () => {
        dispatch(setActiveCategory(id))
        dispatch(fetchedCards(category))
    }

    const className = activeItem !== id ? 'category__item btn' : 'category__item btn active';
    return (
        <li onClick={handleClick} className={className}>
            {category}
            <svg className="category__svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"
                width="24">
                <path d="M10 17l5-5-5-5v10z" />
                <path d="M0 24V0h24v24H0z" fill="none" />
            </svg>
        </li>
    )
}

export default CategoryItem
