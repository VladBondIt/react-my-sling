import React from 'react'

function CartModal({ typeModal, handleSetModalShow, handleClear }) {

    const modalText = ["Вы хотите очистить корзину?", "Вы хотите отменить позицию?"]

    const handleNot = () => {
        handleSetModalShow()
    }
    const handleYes = () => {
        handleSetModalShow()
        handleClear()
    }

    return (
        <div className="modal">
            <div className="modal__body">
                <div className="modal__text">
                    {modalText[typeModal]}
                </div>
                <div className="modal__buttons">
                    <button onClick={handleNot} className="modal__button btn shd">Нет</button>
                    <button onClick={handleYes} className="modal__button btn shd">Да</button>
                </div>
            </div>
        </div>
    )
}

export default CartModal
