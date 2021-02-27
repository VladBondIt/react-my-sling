import React from 'react'

function ThanksModal({ handlerModalShow }) {

    React.useEffect(() => {
        setTimeout(() => {
            handlerModalShow()
        }, 3000);
    }, [])

    return (
        <div className="modal__thanks thanks">
            <div className="thanks__text">
                Регистрация прошла успешно!
            </div>
        </div>
    )
}

export default ThanksModal