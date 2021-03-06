import React from 'react'

function ModalInput({ type, name, value, callback, placeholder }) {
    return (
        <input
            onChange={(e) => callback(e.target.value)}
            className="admin-modal__input shd"
            type={type}
            name={name}
            value={value}
            placeholder={placeholder} />

    )
}

export default ModalInput
