import React from 'react';
import CartModal from './CartModal';
import OfferCallModal from './OfferCallModal';
import { useSelector, useDispatch } from 'react-redux';
import { cancelPosition, clearCart } from '../redux/actions/cart';
import { setModalShow } from '../redux/actions/modal';

function Modal() {

    const dispatch = useDispatch();


    const { modalShow, typeModal, cancelId } = useSelector((state) => ({
        modalShow: state.modal.modalShow,
        typeModal: state.modal.typeModal,
        cancelId: state.modal.cancelId,
    }))

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

    let bodyClassName = "modal__body";
    bodyClassName += typeModal === 2 ? " modal__body_header" : " modal__body_cart";

    return (
        <div
            onClick={delegateShowModal}
            className="modal">
            <div className={bodyClassName}>
                {typeModal === 2
                    ?
                    <OfferCallModal handlerModalShow={handlerModalShow} />
                    :
                    <CartModal
                        typeModal={typeModal}
                        handlerNot={handlerNot}
                        handlerYes={handlerYes} />}
            </div>
        </div>
    )
}

export default Modal;
