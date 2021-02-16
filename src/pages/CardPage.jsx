import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../redux/actions/cart';
import HeaderNav from '../components/HeaderNav';
import ForCard0 from '../assets/images/card/for_card-cut.png';
import ForCard1 from '../assets/images/card/sling-w-ring.jpg';
import ForCard2 from '../assets/images/card/sling-backpack.jpg';
import ForCard3 from '../assets/images/card/modal-popup.jpg';
import PreviewItem from '../components/PreviewItem';

function CardPage() {


    const previewObj = useSelector(({ modal }) => modal.previewObj)
    const { title, description, material, size, price, oldprice, img } = previewObj;

    const [activeImg, setActiveImg] = useState(img)
    const [activeId, setActiveId] = useState(1)

    const testArr = [
        { name: ForCard0 },
        { name: ForCard1 },
        { name: ForCard2 },
        { name: ForCard3 }
    ];

    const dispatch = useDispatch();

    const handlerAddItemToCart = () => {
        dispatch(setCartItems(previewObj))
    }


    return (
        <>
            <div className="header__notmain">
                <div className="container">
                    <HeaderNav />
                </div>
            </div>
            <div className="preview mainbg">
                <div className="container">
                    <div className="preview__body">
                        <div className="preview__imagebox imagebox">
                            <div className="imagebox__column">
                                {testArr.map((x, i) => <PreviewItem
                                    key={x.name}
                                    setActiveImg={setActiveImg}
                                    {...x}
                                    index={i + 1}
                                    activeId={activeId}
                                    setActiveId={setActiveId} />)}
                            </div>
                            <div className="imagebox__column">
                                <img className="imagebox__mainimg" src={activeImg} alt="" />
                            </div>
                        </div>
                        <div className="preview__infobox">
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
                                <div className="preview__price price">
                                    <span className="price__old-big">Старая цена:
                                        <span className="price__rub">{oldprice} руб</span>
                                    </span>
                                    <span className="price__current">Цена:
                                        <span className="price__rub">{price} руб</span>
                                    </span>
                                </div>
                                <button
                                    className="preview__button add-button btn"
                                    onClick={handlerAddItemToCart}>
                                    Добавить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CardPage
