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
                Благодарим! Наш менеджер вскоре свяжется с вами!
            </div>
        </div>
    )
}

export default ThanksModal
