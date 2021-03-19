import React from 'react'

function RatingItem({ value, handlerRatingItem }) {
    return (
        <input onChange={handlerRatingItem} type="radio" className="rating__item" value={value} name="rating" />
    )
}

export default RatingItem
