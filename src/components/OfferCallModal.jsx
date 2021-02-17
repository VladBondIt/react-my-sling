import React, { createRef, useRef } from 'react';
import { ReactComponent as DeleteItem } from '../assets/images/svg/clear-single.svg';
import InputMask from 'react-input-mask';

function OfferCallModal({ handlerModalShow, handlerSuccess,
    handlerEmail, handlerPhone, handlerName, email, isEmail, phone, name, setFormError, formError, setEmail }) {

    const form = useRef(null);

    const input = createRef(null);


    const handlerSubmit = (e) => {
        e.preventDefault();
        if (email && phone && name) {
            handlerSuccess(e);
            form.current.reset();
        } else {
            setFormError(true)
            setTimeout(() => {
                setFormError(false)
            }, 1000);
        }
    }



    let emailClassName = "form__input shd";
    if (email) {
        emailClassName += !isEmail(email) ? " error" : " valid";
    } else {
        emailClassName += "";
    }
    const handleBlur = () => {
        !isEmail(email)
            ? setEmail('')
            : setTimeout(() => {
                emailClassName = "form__input shd"
            }, 1000);
    }

    return (
        <form ref={form} onSubmit={handlerSubmit} className="modal__form form">

            <input
                onChange={handlerName}
                type="text"
                name="name"
                value={name}
                placeholder="Введите ваше Имя"
                className="form__input shd" />
            <InputMask
                ref={input}
                onChange={handlerPhone}
                mask="9(999)999 99 99"
                type="tel"
                name="phone"
                value={phone}
                placeholder="Введите ваш Телефон"
                className="form__input shd" />
            <input
                onBlur={handleBlur}
                onChange={handlerEmail}
                type="text"
                name="email"
                value={email}
                placeholder="Введите ваш Email"
                className={emailClassName} />

            <div className="form__checkbox">
                <label className="form__label link"><input className="form__check-input" type="checkbox" name="license" />
                    <span className="form__subcheck"></span>
                                Подписаться на новости</label>
            </div>
            {formError ? <div className="form__error">Необходимо заполнить все поля</div> : null}
            <button className="form__button btn shd eff">Отправить</button>
            <div onClick={handlerModalShow} className="form__close btn eff"><DeleteItem className="form__svg" /></div>
        </form>
    )
}

export default OfferCallModal
