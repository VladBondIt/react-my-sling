import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as DeleteItem } from '../assets/images/svg/clear-single.svg';
import { ReactComponent as Plus } from '../assets/images/svg/plus.svg';
import { ReactComponent as Minus } from '../assets/images/svg/minus.svg';

function CartItem({ id, title, img, size, material, price, description }) {


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
                <span className="item__price">{price} руб</span>
            </div>
            <div className="item__column">
                <div className="item__count">
                    <button className="item__button shd btn"><Minus className="item__minus" /></button>
                    <span className="item__count-value">{countsIdItems[id]} шт</span>
                    <button className="item__button item__button_green shd btn"><Plus className="item__plus" /> </button>
                </div>
            </div>
            <div className="item__column">
                <span className="item__totalprice">{price * countsIdItems[id]} руб</span>
            </div>
            <div className="item__column">
                <button className="item__button shd btn"><DeleteItem className="item__svg" /></button>
            </div>

        </div>
    )
}

export default CartItem
