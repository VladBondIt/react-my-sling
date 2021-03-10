import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../redux/actions/cart';
import PreviewItem from '../components/PreviewItem';
import BackButton from '../components/BackButton';
import httpService from '../services/httpService';
import { HOST } from '../consts/consts';
import { useParams } from 'react-router-dom';
import { setPreviewObj } from '../redux/actions/modal';
import { setHomePage } from '../redux/actions/page';
import AddButton from '../components/AddButton';

function CardPage() {

    const scrollPoint = useRef()

    const { id } = useParams();

    const { previewObj, user } = useSelector(({ modal, login }) => ({
        ...modal,
        ...login
    }))

    const [activeImg, setActiveImg] = useState('')
    const [activeId, setActiveId] = useState(1)
    const [sideImgs, setSideImgs] = useState([])

    const dispatch = useDispatch();

    const handlerAddItemToCart = () => {
        dispatch(setCartItems(previewObj))
    }
    if (previewObj && sideImgs.length === 0) {
        setActiveImg(HOST + previewObj.img)
        const { firstSideImg, secondSideImg, } = previewObj.info[0]
        setSideImgs([HOST + previewObj.img, HOST + firstSideImg, HOST + secondSideImg])
    }

    useEffect(() => {
        scrollPoint.current.scrollIntoView({ behavior: "smooth" })
        dispatch(setHomePage(false))
        httpService.getItem(id).then(res => {
            dispatch(setPreviewObj(res))
        })
    }, [])



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
                                <AddButton user={user} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardPage
