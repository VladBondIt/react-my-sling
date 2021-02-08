import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCartItems } from '../redux/actions/cart';
import ForCard0 from '../assets/images/card/for_card-cut.png';
import ForCard1 from '../assets/images/card/sling-w-ring.jpg';
import ForCard2 from '../assets/images/card/sling-backpack.jpg';
import ForCard3 from '../assets/images/card/modal-popup.jpg';
import PreviewItem from './PreviewItem';

function PreviewCardModal({ previewObj, handlerModalShow }) {
    const { title, description, material, size, price, oldprice, img } = previewObj;

    const [activeImg, setActiveImg] = useState(img)
    const [activeId, setActiveId] = useState(1)

    const testArr = [
        { id: 1, name: ForCard0 },
        { id: 2, name: ForCard1 },
        { id: 3, name: ForCard2 },
        { id: 4, name: ForCard3 }
    ];

    const dispatch = useDispatch();

    const handlerAddItem = () => {
        handlerModalShow()
        dispatch(setCartItems(previewObj))
    }


    return (
        <div className="modal__preview preview">
            <div className="preview__imagebox imagebox">
                <div className="imagebox__column">
                    {testArr.map((x) => <PreviewItem
                        key={x.id}
                        setActiveImg={setActiveImg}
                        {...x}
                        activeId={activeId}
                        setActiveId={setActiveId} />)}
                </div>
                <div className="imagebox__column">
                    <img className="imagebox__mainimg" src={activeImg} alt="" />
                </div>
            </div>
            <div className="preview__body">
                <div className="preview__row">
                    <h2 className="preview__name">{title}</h2>
                    <div className="preview__text">
                        {description}: Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit impedit vitae recusandae sequi labore itaque maxime debitis maiores asperiores iusto!
                    </div>
                </div>
                <div className="preview__row">
                    <div className="preview__column">
                        <span className="preview__size">Размер:</span>
                        <span className="preview__size-count">{size} см</span>
                    </div>
                    <div className="preview__column">
                        <span className="preview__material">Материал:</span>
                        <span className="preview__material-value">{material}</span>
                    </div>
                </div>
                <div className="preview__row">
                    <div className="preview__column">
                        <div className="preview__price price">
                            {/* <span className="price__old">{oldprice} руб</span> */}
                            <span className="price__current">Цена: {price} руб</span>
                        </div>
                    </div>
                    <div className="preview__column">
                        <button
                            className="preview__button add-button btn"
                            onClick={handlerAddItem}>
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PreviewCardModal;
