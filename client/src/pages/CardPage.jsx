import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../redux/actions/cart';
import PreviewItem from '../components/PreviewItem';
import BackButton from '../components/BackButton';
import { HOST } from '../consts/consts';
import { useParams } from 'react-router-dom';
import { setHomePage } from '../redux/actions/page';
import AddButton from '../components/AddButton';
import itemService from '../services/itemService';
import basketService from '../services/basketService';
import RatingItem from '../components/RatingItem';
import ratingService from '../services/ratingService';
import ReviewsItem from '../components/ReviewsItem';
import useInput from '../hooks/useInput';

function CardPage() {

    const scrollPoint = useRef()

    const { id } = useParams();

    const { user, basketId } = useSelector(({ login, cart }) => ({
        ...login,
        ...cart
    }))

    const [activeImg, setActiveImg] = useState('')
    const [activeId, setActiveId] = useState(1)
    const [sideImgs, setSideImgs] = useState([])
    const [ratingValue, setRatingValue] = useState(0)
    const [width, setWidth] = useState('')
    const [overallWidth, setOverallWidth] = useState('')
    const [ratingShow, setRatingShow] = useState(true)
    const [overallRating, setOverallRating] = useState(0)
    const [previewObj, setPreviewObj] = useState(0)
    const [reviewArr, setReviewArr] = useState('')

    const reviewText = useInput('')

    const ratingNums = [1, 2, 3, 4, 5]

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

    const calcWidth = useCallback((num) => {
        const obj = {
            width: (num / 0.05) + "%"
        }
        return obj;
    }, [])

    const fetchRating = useCallback(() => {
        ratingService.getRating(id, user.id).then((res) => {
            if (res) {
                const { booleanResult, overallRating, ratingsArr } = res
                setOverallRating(overallRating);
                setRatingShow(booleanResult)
                setOverallWidth(calcWidth(overallRating))
                setReviewArr(ratingsArr)
            }
        })
    }, [calcWidth, id, user.id])

    const handlerRatingItem = (e) => {
        setRatingValue(e.target.value)
        setWidth(calcWidth(e.target.value))
    }

    const handlerVote = async (e) => {
        e.preventDefault()
        const postRating = await ratingService.postRating(user.name, reviewText.value, ratingValue, user.id, id)

        if (postRating) {
            fetchRating()
        }
    }

    useEffect(() => {
        scrollPoint.current.scrollIntoView({ behavior: "smooth" })
        dispatch(setHomePage(false))
        itemService.getItem(id, user.id).then(res => {
            setPreviewObj(res)
        })

        fetchRating()

    }, [fetchRating, dispatch, id, user.id])


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
                            <div className="imagebox__rating rating">
                                <div className="rating__label">Рейтинг:</div>
                                <div className="rating__body rating__body_small">
                                    <div className="rating__stars rating__stars_overall">
                                        {overallWidth
                                            ? <div style={overallWidth} className="rating__active"></div>
                                            : <div className="rating__active"></div>}
                                        <div className="rating__items">
                                            {ratingNums.map((value) => <RatingItem
                                                key={value}
                                                value={value}
                                            />)}
                                        </div>
                                    </div>
                                    <div className="rating__value">{overallRating}</div>
                                </div>
                            </div>
                            <div className="preview-info">
                                <div className="preview-info__row">
                                    <div className="preview-info__column">
                                        <span className="preview-info__size">Размер:</span>
                                        <span className="preview-info__size-count">{previewObj && previewObj.info[0].size} см</span>
                                    </div>
                                    <div className="preview-info__column">
                                        <span className="preview-info__material">Материал:</span>
                                        <span className="preview-info__material-value">{previewObj && previewObj.info[0].material}</span>
                                    </div>
                                </div>
                                <div className="preview-info__price price">
                                    <span className="price__old-big">Старая цена:
                                        <span className="price__rub">{previewObj && previewObj.oldprice} руб</span>
                                    </span>
                                    <span className="price__current">Цена:
                                        <span className="price__rub">{previewObj && previewObj.price} руб</span>
                                    </span>
                                </div>
                            </div>
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

                            <div className="preview__buttons">
                                <BackButton className={"preview__button shd btn eff"} />
                                <AddButton callback={handlerAddItemToCart} user={user} className={'preview__button add-button btn'} />
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="reviews">
                    <div className="reviews__label">Отзывы:</div>
                    {reviewArr
                        ? reviewArr.map((obj) =>
                            <ReviewsItem ratingNums={ratingNums} key={obj.name} {...obj} calcWidth={calcWidth} />)
                        : <div className="reviews__nothing">Нет отзывов о товаре</div>}

                </ul>
                {user.role === "USER" && ratingShow
                    ?
                    <form onSubmit={handlerVote} className="preview__form rating">
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
                        <textarea
                            {...reviewText}
                            className="rating__message shd"
                            type="text"
                            placeholder="Оставьте свой отзыв о товаре" />
                        {ratingValue && reviewText.value
                            ? <button className="rating__btn shd btn eff">Отправить</button>
                            : <button
                                disabled
                                title="Выберите оценку"
                                className="rating__btn shd btn eff disabled">Отправить</button>}
                    </form>
                    : null}
            </div>
        </div>
    )
}


export default CardPage
