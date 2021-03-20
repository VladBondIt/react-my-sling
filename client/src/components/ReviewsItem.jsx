import React from 'react'

function ReviewsItem({ name, post }) {

    return (
        <li className="reviews__item shd">
            <span className="reviews__name">{name}:</span>
            <span className="reviews__post">{post}</span>
        </li>
    )
}

export default ReviewsItem
