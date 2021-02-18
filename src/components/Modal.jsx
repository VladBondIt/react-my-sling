import React, { useState, useEffect } from 'react';
import CartModal from './CartModal';
import OfferCallModal from './OfferCallModal';
import { useSelector, useDispatch } from 'react-redux';
import { cancelPosition, clearCart } from '../redux/actions/cart';
import { setModalShow, setModalType } from '../redux/actions/modal';
import OrderModal from './OrderModal';
import ThanksModal from './ThanksModal';

function Modal() {

    const dispatch = useDispatch();

    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [formError, setFormError] = useState(false)


    const { modalShow, typeModal, cancelId, totalPrice, totalCount } = useSelector((state) => ({
        modalShow: state.modal.modalShow,
        typeModal: state.modal.typeModal,
        cancelId: state.modal.cancelId,
        totalPrice: state.cart.totalPrice,
        totalCount: state.cart.totalCount,
    }))


    function isEmail(email) {
        const re = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm;
        return re.test(email);
    }
    function isPhone(phone) {
        const re = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
        return re.test(phone);
    }

    const handlerSuccess = () => {
        dispatch(setModalType(5))
        console.log(phone);
    }

    const handlerPhone = (e) => {
        if (e.target.value.trim()) {
            setPhone(e.target.value);
        } else {
            setPhone("");
        }
    }
    const handlerEmail = (e) => {
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

    const handlerClear = () => {
        dispatch(clearCart())
    }
    const handlerCancel = () => {
        dispatch(cancelPosition(cancelId))
    }

    const handlerModalShow = () => {
        dispatch(setModalShow(!modalShow))
    }

    const delegateShowModal = e => {
        if (e.target.matches('.modal')) {
            handlerModalShow()
        }
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
                setPhone={setPhone}
                isPhone={isPhone}
                setEmail={setEmail}
                formError={formError}
                setFormError={setFormError}
                phone={phone}
                email={email}
                isEmail={isEmail}
                name={name}
                handlerName={handlerName}
                handlerEmail={handlerEmail}
                handlerPhone={handlerPhone}
                handlerSuccess={handlerSuccess}
                handlerModalShow={handlerModalShow} />
            break;
        case 4:
            bodyClassName += " modal__body_cart-order";
            visibleModalBody = <OrderModal
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
