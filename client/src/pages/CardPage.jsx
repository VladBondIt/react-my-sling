import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../redux/actions/cart';
import PreviewItem from '../components/PreviewItem';
import BackButton from '../components/BackButton';
import { HOST } from '../consts/consts';
import { useParams } from 'react-router-dom';
import { setPreviewObj } from '../redux/actions/modal';
import { setHomePage } from '../redux/actions/page';
import AddButton from '../components/AddButton';
import itemService from '../services/itemService';
import basketService from '../services/basketService';
import RatingItem from '../components/RatingItem';

function CardPage() {

    const scrollPoint = useRef()

    const { id } = useParams();

    const { previewObj, user, basketId } = useSelector(({ modal, login, cart }) => ({
        ...modal,
        ...login,
        ...cart
    }))

    const [activeImg, setActiveImg] = useState('')
    const [activeId, setActiveId] = useState(1)
    const [sideImgs, setSideImgs] = useState([])
    const [ratingNums, setRatingNums] = useState([1, 2, 3, 4, 5])
    const [ratingValue, setRatingValue] = useState(0)
    const [width, setWidth] = useState('')

    const dispatch = useDispatch();

    const handlerAddItemToCart = () => {
        basketService.addBasketItem(id, basketId).then(res => console.log(res))
        dispatch(addCartItem(previewObj))
    }
    if (previewObj && sideImgs.length === 0) {
        setActiveImg(HOST + previewObj.img)
        const { firstSideImg, secondSideImg, } = previewObj.info[0]
        setSideImgs([HOST + previewObj.img, HOST + firstSideImg, HOST + secondSideImg])
    }

    useEffect(() => {
        scrollPoint.current.scrollIntoView({ behavior: "smooth" })
        dispatch(setHomePage(false))
        itemService.getItem(id).then(res => {
            dispatch(setPreviewObj(res))
        })
    }, [])


    const handlerRatingItem = (e) => {
        setRatingValue(e.target.value)
        const obj = {
            width: (e.target.value / 0.05) + "%"
        }

        setWidth(obj)
    }

    return (
        <div ref={scrollPoint} className="preview mainbg">
            <div className="container">
                <div className="preview__body">
                    <div className="preview__imagebox imagebox">
                        <div className="imagebox__column">
                            {sideImgs.map((path, i) => <PreviewItem
                                key={path}
                                setActiveImg={setActiveImg}
                                path={path}
                                index={i + 1}
                                activeId={activeId}
                                setActiveId={setActiveId} />)}
                        </div>
                        <div className="imagebox__column">
                            <img className="imagebox__mainimg" src={activeImg} alt="" />
                        </div>
                        <div className="imagebox__column">
                            <div className="imagebox__rating">
                                Рейтинг товара: {previewObj && previewObj.rating}
                            </div>
                            <ul className="imagebox__reviews reviews">
                                <li className="reviews__item">
                                    <span className="reviews__name">Ольга:</span>
                                    <span className="reviews__post">Классный слинг всем рекомендую.</span>
                                </li>
                                <li className="reviews__item">
                                    <span className="reviews__name">Юлия:</span>
                                    <span className="reviews__post">Очень удобная вещь!</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="preview__infobox">
                        <div className="preview__row">
                            <h2 className="preview__name">{previewObj && previewObj.name}</h2>
                            <div className="preview__text">
                                {previewObj && previewObj.info[0].description}: Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit impedit vitae recusandae sequi labore itaque maxime debitis maiores asperiores iusto!
                                </div>
                        </div>
                        <div className="preview__row">
                            <div className="preview__column">
                                <span className="preview__size">Размер:</span>
                                <span className="preview__size-count">{previewObj && previewObj.info[0].size} см</span>
                            </div>
                            <div className="preview__column">
                                <span className="preview__material">Материал:</span>
                                <span className="preview__material-value">{previewObj && previewObj.info[0].material}</span>
                            </div>
                        </div>
                        <div className="preview__row">
                            <div className="preview__price price">
                                <span className="price__old-big">Старая цена:
                                        <span className="price__rub">{previewObj && previewObj.oldprice} руб</span>
                                </span>
                                <span className="price__current">Цена:
                                        <span className="price__rub">{previewObj && previewObj.price} руб</span>
                                </span>
                            </div>
                            <div className="preview__buttons">
                                <BackButton className={"preview__button shd btn eff"} />
                                <AddButton callback={handlerAddItemToCart} user={user} className={'preview__button add-button btn'} />
                            </div>
                        </div>
                    </div>
                </div>
                <form className="preview__form rating">
                    <div className="rating__label">Оценить продукт</div>
                    <div className="rating__body">
                        <div className="rating__stars">
                            {width
                                ? <div style={width} className="rating__active"></div>
                                : <div className="rating__active"></div>}

                            <div className="rating__items">
                                {ratingNums.map((value) => <RatingItem
                                    key={value}
                                    value={value}
                                    handlerRatingItem={handlerRatingItem} />)}
                            </div>
                        </div>
                        <div className="rating__value">{ratingValue}</div>
                    </div>
                    <div className="rating__label">Написать отзыв</div>
                    <textarea className="rating__message" cols="60" rows="5" type="text" />
                    <button className="rating__btn shd btn eff">Отправить</button>
                </form>
            </div>
        </div>
    )
}


export default CardPage
