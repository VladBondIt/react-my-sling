import React, { useRef } from 'react';
import { ReactComponent as DeleteItem } from '../assets/images/svg/clear-single.svg';
import InputMask from 'react-input-mask';

function OrderModal({ handlerModalShow, totalPrice, formError, resultPhoneClassName,
    resultEmailClassName, email, nameClassName, phone, name, handlePhoneBlur,
    handleEmailBlur, totalCount, handlerSuccess, handlerEmail, handlerPhone, handlerName, handlerClear }) {

    const form = useRef(null);

    const handlerOrderSubmit = (e) => {
        if (email && phone && name) {
            handlerSuccess(e, form);
            handlerClear();
        } else {
            handlerSuccess(e, form);
        }
    }

    return (
        <form ref={form} onSubmit={handlerOrderSubmit} className="modal__form form">

            <input
                onChange={handlerName}
                type="text"
                name="name"
                value={name}
                placeholder="Введите ваше Имя"
                className={nameClassName} />
            <InputMask
                onBlur={handlePhoneBlur}
                onChange={handlerPhone}
                mask="+7(999)999 99 99"
                type="tel"
                name="phone"
                value={phone}
                placeholder="Введите ваш Телефон"
                className={resultPhoneClassName} />
            <input
                onBlur={handleEmailBlur}
                onChange={handlerEmail}
                type="text"
                name="email"
                value={email}
                placeholder="Введите ваш Email"
                className={resultEmailClassName} />


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
            {formError ? <div className="form__error">Необходимо заполнить все поля</div> : null}
            <button className="form__button btn shd eff">Подтвердить</button>
            <div onClick={handlerModalShow} className="form__close btn eff"><DeleteItem className="form__svg" /></div>
        </form>
    )
}

export default OrderModal
