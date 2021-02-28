import React, { useRef } from 'react';
import { ReactComponent as CloseModal } from '../../assets/images/svg/clear-single.svg';
import InputMask from 'react-input-mask';

function OfferCallModal({ handlerModalShow, handlerCallSuccess,
    handlerEmail, handlerPhone, handlerName, email, resultPhoneClassName,
    phone, name, formError, handlePhoneBlur, resultEmailClassName,
    handleEmailBlur, nameClassName }) {

    const form = useRef(null);


    const handlerSubmit = (e) => {
        handlerCallSuccess(e, form);
    }


    return (
        <form ref={form} onSubmit={handlerSubmit} className="modal__form form">

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

            <div className="form__checkbox">
                <label className="form__label link"><input className="form__check-input" type="checkbox" name="license" />
                    <span className="form__subcheck"></span>
                                Подписаться на новости</label>
            </div>
            {formError ? <div className="form__error">Необходимо заполнить все поля</div> : null}
            <button className="form__button btn shd eff">Отправить</button>
            <div onClick={handlerModalShow} className="form__close btn eff"><CloseModal className="form__svg" /></div>
        </form>
    )
}

export default OfferCallModal
