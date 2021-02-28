import React, { useRef } from 'react';
import { ReactComponent as CloseModal } from '../../assets/images/svg/clear-single.svg';
import InputMask from 'react-input-mask';

function OrderModal({ handlerModalShow, formError, resultPhoneClassName,
    handlerPassword, password, passClassName, resultEmailClassName, email, nameClassName, phone,
    name, handlePhoneBlur, handleEmailBlur, handlerRegSuccess, handlerEmail, handlerPhone,
    handlerName, checked, setChecked }) {

    const form = useRef(null);


    const handlerRegSubmit = (e) => {
        handlerRegSuccess(e, form);
    }

    const handlerCheckbox = (e) => {
        setChecked(e.target.checked)
    }

    return (
        <form ref={form} onSubmit={handlerRegSubmit} className="modal__form form">

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
            <input
                onChange={handlerPassword}
                type="password"
                name="password"
                value={password}
                placeholder="Введите ваш Пароль"
                className={passClassName} />

            <div className="form__checkbox">
                <label className="form__label link"><input
                    onChange={handlerCheckbox}
                    checked={checked}
                    className="form__check-input" type="checkbox" name="license" />
                    <span className="form__subcheck"></span>
                            Согласие на обработку ваших данных</label>
            </div>
            {formError ? <div className="form__error">Необходимо заполнить все поля</div> : null}
            <button className="form__button btn shd eff">Регистрация</button>
            <div onClick={handlerModalShow} className="form__close btn eff"><CloseModal className="form__svg" /></div>
        </form>
    )
}

export default OrderModal
