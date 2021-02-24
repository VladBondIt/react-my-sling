import React from 'react'

function CartModal({ typeModal, handlerNot, handlerYes }) {

    const modalText = ["Вы хотите очистить корзину?", "Вы хотите отменить позицию?"]

    return (
        <div className="modal__cart">
            <div className="modal__text">
                {modalText[typeModal]}
            </div>
            <div className="modal__buttons">
                <button onClick={handlerNot} className="modal__button btn shd eff">Нет</button>
                <button onClick={handlerYes} className="modal__button btn shd eff">Да</button>
            </div>
        </div>
    )
}

export default CartModal
