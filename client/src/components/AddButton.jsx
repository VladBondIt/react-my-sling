import React from 'react'

function AddButton({ user, callback }) {
    return (
        <button
            disabled={user ? false : true}
            title={user ? "Добавить предмет в корзину" : "Войдите что бы добавить предмет в корзину"}
            className="card__button add-button btn"
            onClick={callback}
        >
            Добавить
        </button>
    )
}

export default AddButton
