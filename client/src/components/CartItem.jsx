import React from 'react';
import { ReactComponent as DeleteItem } from '../assets/images/svg/clear-single.svg';
import { ReactComponent as Plus } from '../assets/images/svg/plus.svg';
import { ReactComponent as Minus } from '../assets/images/svg/minus.svg';
import { useDispatch } from 'react-redux';
import { minusCartItem } from '../redux/actions/cart';
import { setCancelId } from '../redux/actions/modal';
import { HOST } from '../consts/consts';
import basketService from '../services/basketService';

function CartItem({ id, count, name, img, price, info, handlerCancelModalShow, basketId }) {

    const dispatch = useDispatch();


    const handlerCartItem = () => {
        console.log('object');

    }

    const handlerMinusItem = () => {
        if (count !== 1) {
            basketService.minusBasketItem(id, basketId).then(res => console.log(res))
            dispatch(minusCartItem(id))
        }
    }

    const handlerCancel = () => {
        handlerCancelModalShow()
        dispatch(setCancelId(id))
    }

    const minusButton = count === 1 ? "item__button shd btn disabled reff" : "item__button shd btn reff";

    return (
        <div className="cart__item item shd">
            <div className="item__column">
                <div className="item__imgbox">
                    <img className="item__img" src={HOST + img} alt="" />
                </div>
                <h2 className="item__name">{name}</h2>
            </div>
            <div className="item__column">
                <span className="item__description">{info[0].description}</span>
            </div>
            <div className="item__column">
                <div className="item__row">
                    <span className="item__size">Размер:</span>
                    <span className="item__size-count">{info[0].size} см</span>
                </div>
                <div className="item__row">
                    <span className="item__material">Материал:</span>
                    <span className="item__material-value">{info[0].material}</span>
                </div>
            </div>
            <div className="item__column">
                <span className="item__text">Цена:</span>
                <span className="item__price">{price} руб</span>
            </div>
            <div className="item__column">
                <div className="item__count">
                    <button
                        className={minusButton}>
                        <Minus
                            onClick={handlerMinusItem}
                            className="item__minus" />
                    </button>
                    <span className="item__count-value">{count} шт</span>
                    <button className="item__button item__button_green shd btn geff">
                        <Plus
                            onClick={handlerCartItem}
                            className="item__plus"
                        />
                    </button>
                </div>
            </div>
            <div className="item__column">
                <span className="item__text">Стоимость:</span>
                <span className="item__totalprice">{price * count} руб</span>
            </div>
            <div className="item__column">
                <button onClick={handlerCancel} className="item__button shd btn reff">
                    <DeleteItem className="item__svg" />
                </button>
            </div>

        </div >
    )
}

export default CartItem
