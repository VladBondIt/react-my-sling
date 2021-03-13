import React from 'react'

function AddButton({ user, callback, className }) {
    return (
        <button
            disabled={user ? false : true}
            title={user ? "Добавить предмет в корзину" : "Войдите что бы добавить предмет в корзину"}
            className={className}
            onClick={callback}
        >
            Добавить
        </button>
    )
}

export default AddButton
