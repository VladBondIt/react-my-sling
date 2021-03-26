import React from 'react'

function ReviewsItem({ name, text }) {

    return (
        <li className="reviews__item shd">
            <span className="reviews__name">{name}:</span>
            <span className="reviews__post">{text}</span>
        </li>
    )
}

export default ReviewsItem
