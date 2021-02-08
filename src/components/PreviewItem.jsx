import React from 'react'

function PreviewItem({ setActiveId, activeId, setActiveImg, id, name }) {

    const handlerActiveImg = () => {
        setActiveImg(name)
        setActiveId(id)
    }

    let overlayClassName = "imagebox__overlay";
    overlayClassName += id === activeId ? " active" : "";

    return (
        <div onClick={handlerActiveImg} className="imagebox__row">
            <img className="imagebox__mini-img" src={name} alt="" />
            <div className={overlayClassName}></div>
        </div>
    )
}

export default PreviewItem
