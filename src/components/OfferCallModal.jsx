import React from 'react';
import { ReactComponent as DeleteItem } from '../assets/images/svg/clear-single.svg';

function OfferCallModal({ handlerModalShow }) {
    return (
        <form className="modal__form call-form">

            <input type="tel" name="phone" placeholder="Введите ваш Телефон" className="call-form__phone shd" />
            <input type="email" name="email" placeholder="Введите ваш Email" className="call-form__email shd" />

            <div className="call-form__checkbox">
                <label className="call-form__label link"><input className="call-form__check-input" type="checkbox" name="license" />
                    <span className="call-form__subcheck"></span>
                                Подписаться на новости</label>
            </div>

            <button className="call-form__button btn shd">Отправить</button>
            <div onClick={handlerModalShow} className="call-form__close btn"><DeleteItem className="call-form__svg" /></div>
        </form>
    )
}

export default OfferCallModal
