import React, { useRef, useState } from 'react';
import { ReactComponent as DeleteItem } from '../assets/images/svg/clear-single.svg';
import InputMask from 'react-input-mask';

function OfferCallModal({ handlerModalShow, handlerSuccess, isPhone, setPhone,
    handlerEmail, handlerPhone, handlerName, email, isEmail, phone, name, setFormError, formError, setEmail }) {

    const form = useRef(null);

    const [emailClass, setEmailClass] = useState("");
    const [phoneClass, setPhoneClass] = useState("");


    const handlerSubmit = (e) => {
        e.preventDefault();
        if (email && phone && name) {
            handlerSuccess(e);
            form.current.reset();
        } else {
            setFormError(true)
            setTimeout(() => {
                setFormError(false)
            }, 3000);
        }
    }


    let emailClassName = "form__input shd",
        phoneClassName = "form__input shd",
        nameClassName = "form__input shd";

    nameClassName += name ? " filled" : "";

    if (phone) {
        phoneClassName += " filled";
        phoneClassName += !isPhone(phone) ? " error" : " valid";
    } else {
        emailClassName += "";
    }

    if (email) {
        emailClassName += " filled";
        emailClassName += !isEmail(email) ? " error" : " valid";
    } else {
        emailClassName += "";
    }


    const handlePhoneBlur = () => {
        !isPhone(phone)
            ? setPhone('')
            : setTimeout(() => {
                setPhoneClass("form__input shd filled")
            }, 1000);
    }
    const handleEmailBlur = () => {
        !isEmail(email)
            ? setEmail('')
            : setTimeout(() => {
                setEmailClass("form__input shd filled")
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
                className={nameClassName} />
            <InputMask
                onBlur={handlePhoneBlur}
                onChange={(e) => {
                    handlerPhone(e);
                    setPhoneClass("")
                }}
                mask="9(999)999 99 99"
                type="tel"
                name="phone"
                value={phone}
                placeholder="Введите ваш Телефон"
                className={phoneClass ? phoneClass : phoneClassName} />
            <input
                onBlur={handleEmailBlur}
                onChange={(e) => {
                    handlerEmail(e);
                    setEmailClass("");
                }}
                type="text"
                name="email"
                value={email}
                placeholder="Введите ваш Email"
                className={emailClass ? emailClass : emailClassName} />

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
