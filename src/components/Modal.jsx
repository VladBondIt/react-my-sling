import React from 'react';
import CartModal from './CartModal';
import OfferCallModal from './OfferCallModal';
import { useSelector, useDispatch } from 'react-redux';
import { cancelPosition, clearCart } from '../redux/actions/cart';
import { setModalShow } from '../redux/actions/modal';
import PreviewCardModal from './PreviewCardModal';

function Modal() {

    const dispatch = useDispatch();


    const { modalShow, typeModal, cancelId, previewObj } = useSelector((state) => ({
        modalShow: state.modal.modalShow,
        typeModal: state.modal.typeModal,
        cancelId: state.modal.cancelId,
        previewObj: state.modal.previewObj,
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
            visibleModalBody = <OfferCallModal handlerModalShow={handlerModalShow} />
            break;
        case 3:
            bodyClassName += " modal__body_preview";
            visibleModalBody = <PreviewCardModal previewObj={previewObj} handlerModalShow={handlerModalShow} />
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