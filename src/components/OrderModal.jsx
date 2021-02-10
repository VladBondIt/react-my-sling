import React from 'react';
import { ReactComponent as DeleteItem } from '../assets/images/svg/clear-single.svg';

function OrderModal({ handlerModalShow, totalPrice, totalCount, handlerSuccess }) {
    return (
        <form onSubmit={handlerSuccess} className="modal__form form">

            <input type="tel" name="phone" placeholder="Введите ваш Телефон" className="form__phone shd" />
            <input type="email" name="email" placeholder="Введите ваш Email" className="form__email shd" />


            <div className="form__row">
                <span className="form__text">Количество ваших товаров:</span>
                <span className="form__count">{totalCount} шт</span>
            </div>
            <div className="form__row">
                <span className="form__text">Общая стоимость товаров:</span>
                <span className="form__count">{totalPrice} руб</span>
            </div>

            <div className="form__checkbox">
                <label className="form__label link"><input className="form__check-input" type="checkbox" name="license" />
                    <span className="form__subcheck"></span>
                            Согласие на обработку ваших данных</label>
            </div>

            <button className="form__button btn shd">Подтвердить</button>
            <div onClick={handlerModalShow} className="form__close btn"><DeleteItem className="form__svg" /></div>
        </form>
    )
}

export default OrderModal
