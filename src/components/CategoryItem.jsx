import React from 'react'

function CategoryItem({ CategoryType }) {
    const [activeItem, setActiveItem] = React.useState(false)

    const handleClick = () => {
        setActiveItem(!activeItem)
    }

    const className = !activeItem ? 'category__item btn' : 'category__item btn active';
    return (
        <li onClick={handleClick} className={className}>
            {CategoryType}
            <svg className="category__svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"
                width="24">
                <path d="M10 17l5-5-5-5v10z" />
                <path d="M0 24V0h24v24H0z" fill="none" />
            </svg>
        </li>
    )
}

export default CategoryItem
