import React, { useRef } from 'react';
import { ReactComponent as CloseModal } from '../assets/images/svg/clear-single.svg';

function OfferCallModal({ handlerModalShow, handlerLoginSuccess, handlerRegModal,
    handlerEmail, email, handlerPassword, password
    , resultEmailClassName, passClassName,
    handleEmailBlur }) {

    const form = useRef(null);


    const handlerSubmit = (e) => {
        handlerLoginSuccess(e, form);
    }

    const handlerCreate = () => {
        handlerRegModal()
    }


    return (
        <form ref={form} onSubmit={handlerSubmit} className="modal__form form">


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

            <button className="form__button btn shd eff">Войти</button>
            <div className="form__auth auth">
                <span className="auth__text">Нет аккунта?</span>
                <span
                    onClick={handlerCreate}
                    className="auth__link link">Создать аккаунт</span>
            </div>
            <div onClick={handlerModalShow} className="form__close btn eff"><CloseModal className="form__svg" /></div>
        </form>
    )
}

export default OfferCallModal