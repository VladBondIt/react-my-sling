import React from 'react'

function PreviewItem({ setActiveId, activeId, setActiveImg, index, path }) {

    const handlerActiveImg = () => {
        setActiveImg(path)
        setActiveId(index)
    }


    let overlayClassName = "imagebox__overlay";
    overlayClassName += index === activeId ? " active" : "";

    return (
        <div onClick={handlerActiveImg} className="imagebox__row">
            <img className="imagebox__mini-img" src={path} alt="" />
            <div className={overlayClassName}></div>
        </div>
    )
}

export default PreviewItem
