import React from 'react'

function ModalFileInput({ callback, label, name, multiple }) {
    return (
        <div className="admin-modal__input-box shd">
            <label className="admin-modal__label" htmlFor="image">Выберите {label} изображение</label>
            {multiple
                ?
                <input
                    onChange={callback}
                    className="admin-modal__input-file"
                    type="file"
                    name={name}
                    multiple
                />
                :
                <input
                    onChange={callback}
                    className="admin-modal__input-file"
                    type="file"
                    name={name}
                />}
        </div>
    )
}

export default ModalFileInput
