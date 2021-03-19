import React, { useState } from 'react';
import CartModal from './CartModal';
import OfferCallModal from './OfferCallModal';
import { useSelector, useDispatch } from 'react-redux';
import { cancelPosition, clearCart } from '../../redux/actions/cart';
import { setModalShow, setModalType } from '../../redux/actions/modal';
import OrderModal from './OrderModal';
import ThanksModal from './ThanksModal';
import LoginModal from './LoginModal';
import RegistrationModal from './RegistrationModal';
import ThanksRegModal from './ThanksRegModal';
import { setAuth, setUser } from '../../redux/actions/login';
import loginService from '../../services/loginService';
import basketService from '../../services/basketService';

function Modal() {

    const dispatch = useDispatch();

    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [formError, setFormError] = useState(false)
    const [emailClass, setEmailClass] = useState("");
    const [phoneClass, setPhoneClass] = useState("");
    const [checked, setChecked] = useState(true);
    const [password, setPassword] = useState("");


    const { modalShow, typeModal, cancelId, totalPrice, totalCount, basketId } = useSelector((state) => ({
        modalShow: state.modal.modalShow,
        typeModal: state.modal.typeModal,
        cancelId: state.modal.cancelId,
        totalPrice: state.cart.totalPrice,
        totalCount: state.cart.totalCount,
        basketId: state.cart.basketId,
    }))


    function isEmail(email) {
        const re = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm;
        return re.test(email);
    }
    function isPhone(phone) {
        const re = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
        return re.test(phone);
    }

    const handlerCallSuccess = (e) => {
        e.preventDefault();
        if (email && phone && name) {
            e.target.reset();
            dispatch(setModalType(5))
        } else {
            setFormError(true)
            setTimeout(() => {
                setFormError(false)
            }, 3000);
        }
    }

    // Order form cart
    const handlerSuccess = (e) => {
        e.preventDefault();
        if (email && phone && name && checked) {
            e.target.reset();
            dispatch(setModalType(5))
        } else {
            setFormError(true)
            setTimeout(() => {
                setFormError(false)
            }, 3000);
        }
    }

    const handlerLoginSuccess = (e) => {
        e.preventDefault();
        if (email && password) {
            loginService.login(email, password).then(res => {
                dispatch(setUser(res))
                dispatch(setAuth(true))
            })
            e.target.reset();
            handlerModalShow()
        } else {
            setFormError(true)
            setTimeout(() => {
                setFormError(false)
            }, 3000);
        }
    }
    const handlerRegSuccess = (e) => {
        e.preventDefault();
        if (email && phone && name && password && checked) {
            loginService.registration(name, phone, email, password).then(res => console.log(res))
            e.target.reset();
            dispatch(setModalType(7))
        } else {
            setFormError(true)
            setTimeout(() => {
                setFormError(false)
            }, 3000);
        }
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

    const handlerPhone = (e) => {
        setPhoneClass("")
        if (e.target.value.trim()) {
            setPhone(e.target.value);
        } else {
            setPhone("");
        }
    }
    const handlerEmail = (e) => {
        setEmailClass("");
        if (e.target.value.trim()) {
            setEmail(e.target.value);
        } else {
            setEmail("");
        }
    }
    const handlerName = (e) => {
        if (e.target.value.trim()) {
            setName(e.target.value);
        } else {
            setName("");
        }
    }

    const handlerPassword = (e) => {
        if (e.target.value.trim()) {
            setPassword(e.target.value);
        } else {
            setPassword("");
        }
    }

    const handlerClear = () => {
        basketService.clearBasketItem(basketId).then(res => console.log(res))
        dispatch(clearCart())
    }
    const handlerCancel = () => {
        basketService.cancelBasketItem(cancelId, basketId).then(res => console.log(res))
        dispatch(cancelPosition(cancelId))
    }

    const handlerModalShow = () => {
        dispatch(setModalShow(!modalShow))
    }

    const delegateShowModal = (e) => {
        if (e.target.matches('.modal')) {
            handlerModalShow()
        }
    }

    const handlerRegModal = () => {
        dispatch(setModalType(6))
    }

    const handlerNot = () => {
        handlerModalShow()
    }

    const handlerYes = () => {
        switch (typeModal) {
            case 0:
                handlerModalShow()
                handlerClear()
                break;
            case 1:
                handlerModalShow()
                handlerCancel()
                break;

            default:
                break;
        }

    }
    let emailClassName = "form__input shd",
        phoneClassName = "form__input shd",
        nameClassName = "form__input shd",
        passClassName = "form__input shd"

    nameClassName += name ? " filled" : "";
    passClassName += password ? " filled" : "";

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

    const resultPhoneClassName = phoneClass ? phoneClass : phoneClassName;
    const resultEmailClassName = emailClass ? emailClass : emailClassName;

    let bodyClassName = "modal__body mainbg";
    let visibleModalBody = null;

    switch (typeModal) {
        case 0:
            bodyClassName += " modal__body_cart";
            visibleModalBody = <CartModal
                typeModal={typeModal}
                handlerNot={handlerNot}
                handlerYes={handlerYes} />
            break;
        case 1:
            bodyClassName += " modal__body_cart";
            visibleModalBody = <CartModal
                typeModal={typeModal}
                handlerNot={handlerNot}
                handlerYes={handlerYes} />
            break;
        case 2:
            bodyClassName += " modal__body_header";
            visibleModalBody = <OfferCallModal
                formError={formError}
                nameClassName={nameClassName}
                resultPhoneClassName={resultPhoneClassName}
                resultEmailClassName={resultEmailClassName}
                handlePhoneBlur={handlePhoneBlur}
                handleEmailBlur={handleEmailBlur}
                phone={phone}
                email={email}
                name={name}
                handlerName={handlerName}
                handlerEmail={handlerEmail}
                handlerPhone={handlerPhone}
                handlerCallSuccess={handlerCallSuccess}
                handlerModalShow={handlerModalShow} />
            break;
        case 3:
            bodyClassName += " modal__body_header";
            visibleModalBody = <LoginModal
                handlerRegModal={handlerRegModal}
                passClassName={passClassName}
                password={password}
                handlerModalShow={handlerModalShow}
                handlerPassword={handlerPassword}
                handlerLoginSuccess={handlerLoginSuccess}
                handlerEmail={handlerEmail}
                email={email}
                resultEmailClassName={resultEmailClassName}
                handleEmailBlur={handleEmailBlur} />
            break;
        case 4:
            bodyClassName += " modal__body_cart-order";
            visibleModalBody = <OrderModal
                checked={checked}
                setChecked={setChecked}
                nameClassName={nameClassName}
                resultPhoneClassName={resultPhoneClassName}
                resultEmailClassName={resultEmailClassName}
                formError={formError}
                handlePhoneBlur={handlePhoneBlur}
                handleEmailBlur={handleEmailBlur}
                phone={phone}
                email={email}
                name={name}
                handlerClear={handlerClear}
                handlerName={handlerName}
                handlerSuccess={handlerSuccess}
                handlerEmail={handlerEmail}
                handlerPhone={handlerPhone}
                totalPrice={totalPrice}
                totalCount={totalCount}
                handlerModalShow={handlerModalShow} />
            break;
        case 5:
            bodyClassName += " modal__body_thanks";
            visibleModalBody = <ThanksModal handlerModalShow={handlerModalShow} />
            break;
        case 6:
            bodyClassName += " modal__body_cart-order";
            visibleModalBody = <RegistrationModal
                setPhone={setPhone}
                passClassName={passClassName}
                password={password}
                handlerPassword={handlerPassword}
                checked={checked}
                setChecked={setChecked}
                nameClassName={nameClassName}
                resultPhoneClassName={resultPhoneClassName}
                resultEmailClassName={resultEmailClassName}
                formError={formError}
                handlePhoneBlur={handlePhoneBlur}
                handleEmailBlur={handleEmailBlur}
                phone={phone}
                email={email}
                name={name}
                handlerName={handlerName}
                handlerRegSuccess={handlerRegSuccess}
                handlerEmail={handlerEmail}
                handlerPhone={handlerPhone}
                handlerModalShow={handlerModalShow}
            />
            break;
        case 7:
            bodyClassName += " modal__body_thanks";
            visibleModalBody = <ThanksRegModal handlerModalShow={handlerModalShow} />
            break;
        default:
            break;
    }


    return (
        <div
            onClick={delegateShowModal}
            className="modal">
            <div className={bodyClassName}>
                {visibleModalBody}
            </div>
        </div>
    )
}

export default Modal;
