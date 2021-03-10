import React from 'react'
import PaginationItem from './PaginationItem'

function Pagination({ totalCount, limit }) {

    const pageCount = Math.ceil(totalCount / limit)
    const pages = []
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)

    }




    return (
        <ul className="shop__pagination pagination shd">
            {pages.map((item) =>
                <PaginationItem key={item} item={item} />)}
        </ul>
    )
}

export default Pagination
