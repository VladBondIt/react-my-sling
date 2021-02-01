import React from 'react';
import { useSelector } from 'react-redux';

function CartItem({ id, title, img, size, material, price, description, count }) {


    const { countsIdItems } = useSelector((state) => ({
        countsIdItems: state.cart.countsIdItems,
    }))

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
                <span className="item__count">{countsIdItems[id]}</span>
            </div>
            <div className="item__column">
                <span className="item__totalprice">{price * countsIdItems[id]}</span>
            </div>
            <button className="item__remove shd btn">X</button>
        </div>
    )
}

export default CartItem
