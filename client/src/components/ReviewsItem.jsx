import React, { useEffect, useState } from 'react'
import RatingItem from './RatingItem'

function ReviewsItem({ name, text, rating, calcWidth, ratingNums }) {

    const [width, setWidth] = useState('')

    useEffect(() => {

        setWidth(calcWidth(rating))

    }, [calcWidth, rating])

    return (
        <li className="reviews__item shd">
            <div className="reviews__name">
                {name}:
                <div className="rating rating_small">
                    <div className="rating__body rating__body_small">
                        <div className="rating__stars rating__stars_overall">
                            {width
                                ? <div style={width} className="rating__active"></div>
                                : <div className="rating__active"></div>}
                            <div className="rating__items">
                                {ratingNums.map((value) => <RatingItem
                                    key={value}
                                    value={value}
                                />)}
                            </div>
                        </div>
                        <div className="rating__value rating__value_big">{rating}</div>
                    </div>
                </div>
            </div>
            <span className="reviews__post">{text}</span>
        </li>
    )
}

export default ReviewsItem
