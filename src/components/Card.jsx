import React from 'react';
import ForCard0 from '../assets/images/card/for_card-cut.png'
import ForCard1 from '../assets/images/card/sling-w-ring.jpg'
import ForCard2 from '../assets/images/card/sling-backpack.jpg'
import { useDispatch } from 'react-redux';
import { setCartItems } from '../redux/actions/cart';

function Card({ title, description, material, size, price, oldprice, img, id }) {
    const dispatch = useDispatch();

    switch (img) {
        case 0:
            img = ForCard0
            break;
        case 1:
            img = ForCard1
            break;
        case 2:
            img = ForCard2
            break;

        default:
            break;
    }

    const handleCardItem = (obj) => {
        const newObj = {
            ...obj,
            count: 1,
            dataForKey: Date.now().toString(16)
        }

        dispatch(setCartItems(newObj))
    }


    return (
        <div className="shop__card card shd">
            <div className="card__imagebox">
                <img className="card__image" src={img} alt={title} />
            </div>
            <div className="card__infobox">
                <div className="card__textbox">
                    <h2 className="card__title">{title}</h2>
                    <span className="card__subtitle">{description}</span>
                </div>
                <div className="card__row">
                    <span className="card__size">Размер:</span>
                    <span className="card__size-count">{size} см</span>
                </div>
                <div className="card__row">
                    <span className="card__material">Материал:</span>
                    <span className="card__material-value">{material}</span>
                </div>
                <div className="card__row">
                    <div className="card__price price">
                        <span className="price__old">{oldprice} руб</span>
                        <span className="price__current">{price} руб</span>
                    </div>
                    <button
                        className="card__button btn"
                        onClick={() => handleCardItem({
                            id,
                            title,
                            img,
                            description,
                            size,
                            material,
                            price,
                        })}>
                        Добавить
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Card
