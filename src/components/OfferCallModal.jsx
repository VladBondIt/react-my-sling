import React from 'react';
import { ReactComponent as DeleteItem } from '../assets/images/svg/clear-single.svg';

function OfferCallModal({ handlerModalShow, handlerSuccess }) {


    const handlerSubmit = (e) => {
        handlerSuccess(e);
    }

    return (
        <form onSubmit={handlerSubmit} className="modal__form form">

            <input type="tel" name="phone" placeholder="Введите ваш Телефон" className="form__phone shd" />
            <input type="email" name="email" placeholder="Введите ваш Email" className="form__email shd" />

            <div className="form__checkbox">
                <label className="form__label link"><input className="form__check-input" type="checkbox" name="license" />
                    <span className="form__subcheck"></span>
                                Подписаться на новости</label>
            </div>

            <button className="form__button btn shd">Отправить</button>
            <div onClick={handlerModalShow} className="form__close btn"><DeleteItem className="form__svg" /></div>
        </form>
    )
}

export default OfferCallModal
