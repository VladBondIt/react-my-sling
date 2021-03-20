import React from 'react'

function ReviewsItem({ name, post, i, length }) {

    return (
        <li className={i === length ? "reviews__item reviews__item_last shd" : "reviews__item shd"}>
            <span className="reviews__name">{name}:</span>
            <span className="reviews__post">{post}</span>
        </li>
    )
}

export default ReviewsItem
