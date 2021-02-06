import React from 'react'
import CartModal from './CartModal'

function Modal({ typeModal, handleSetModalShow, handleClear, handleCancel }) {


    const handlerNot = () => {
        handleSetModalShow()
    }
    const handlerYes = () => {
        switch (typeModal) {
            case 0:
                handleSetModalShow()
                handleClear()
                break;
            case 1:
                handleSetModalShow()
                handleCancel()
                break;

            default:
                break;
        }

    }

    return (
        <div className="modal">
            <div className="modal__body">
                <CartModal
                    typeModal={typeModal}
                    handlerNot={handlerNot}
                    handlerYes={handlerYes} />
            </div>
        </div>
    )
}

export default Modal;
