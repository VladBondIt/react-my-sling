import React from 'react'

function OfferCallModal() {
    return (
        <form className="modal__form call-form">

            <input type="tel" name="phone" placeholder="Введите ваш Телефон" className="call-form__phone" />
            <input type="email" name="email" placeholder="Введите ваш Email" className="call-form__phone" />

        </form>
    )
}

export default OfferCallModal
