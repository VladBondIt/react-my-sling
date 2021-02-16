import React from 'react'

function PreviewItem({ setActiveId, activeId, setActiveImg, index, name }) {

    const handlerActiveImg = () => {
        setActiveImg(name)
        setActiveId(index)
    }

    console.log(index);

    let overlayClassName = "imagebox__overlay";
    overlayClassName += index === activeId ? " active" : "";

    return (
        <div onClick={handlerActiveImg} className="imagebox__row">
            <img className="imagebox__mini-img" src={name} alt="" />
            <div className={overlayClassName}></div>
        </div>
    )
}

export default PreviewItem
