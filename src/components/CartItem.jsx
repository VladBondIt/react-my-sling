import React from 'react'

function CartItem({ title, img, size, material, price, description, count }) {

    return (
        <div className="cart__item item shd">
            <div className="item__column">
                <div className="item__imgbox">
                    <img className="item__img" src={img} alt="" />
                </div>
                <h2 className="item__name">{title}</h2>
            </div>
            <div className="item__column">
                <span className="item__description">{description}</span>
            </div>
            <div className="item__column">
                <div className="item__row">
                    <span className="item__size">Размер:</span>
                    <span className="item__size-count">{size} см</span>
                </div>
                <div className="item__row">
                    <span className="item__material">Материал:</span>
                    <span className="item__material-value">{material}</span>
                </div>
            </div>
            <div className="item__column">
                <span className="item__price">{price}</span>
            </div>
            <div className="item__column">
                <span className="item__count">{count}</span>
            </div>
            <div className="item__column">
                <span className="item__totalprice">{price * count}</span>
            </div>
            <button className="item__remove shd btn">X</button>
        </div>
    )
}

export default CartItem
