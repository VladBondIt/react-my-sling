import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCartItems } from '../redux/actions/cart';
import { setPreviewObj } from '../redux/actions/modal';
import { useHistory } from 'react-router-dom';
import { setHomePage } from '../redux/actions/page';
import httpService from '../services/httpService';
import { CARD_PAGE_ROUTE, HOST } from '../consts/consts';

function Card({ name, price, oldprice, img, id }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [info, setInfo] = useState(null)


    // switch (img) {
    //     case 0:
    //         img = ForCard0
    //         break;
    //     case 1:
    //         img = ForCard1
    //         break;
    //     case 2:
    //         img = ForCard2
    //         break;

    //     default:
    //         break;
    // }
    // const obj = {
    //     id,
    //     name,
    //     img,
    //     description,
    //     size,
    //     material,
    //     price,
    //     oldprice,
    //     dataForKey: Date.now().toString(16)
    // }

    // const handlerCardItem = () => {
    //     dispatch(setCartItems(obj))
    // }

    // const handlerPreview = () => {
    //     dispatch(setPreviewObj(obj))
    // }

    const handlerLink = () => {
        dispatch(setHomePage(false))
        history.push(CARD_PAGE_ROUTE + '/' + id)
    }

    useEffect(() => {
        httpService.getInfo(id).then(res => setInfo(res))
    }, [])

    return (
        <div className="shop__card card shd" >
            <div className="card__imagebox">
                <img className="card__image" src={HOST + img} alt={name} />
                <div className="card__overlay overlay">
                    <button
                        onClick={handlerLink}
                        className="overlay__button btn eff">Предпросмотр</button>
                </div>
            </div>
            <div className="card__infobox">
                <div className="card__textbox">
                    <h2 className="card__title">{name}</h2>
                    <span className="card__subtitle">{info && info.description}</span>
                </div>
                <div className="card__row">
                    <span className="card__size">Размер:</span>
                    <span className="card__size-count">{info && info.size} см</span>
                </div>
                <div className="card__row">
                    <span className="card__material">Материал:</span>
                    <span className="card__material-value">{info && info.material}</span>
                </div>
                <div className="card__row">
                    <div className="card__price price">
                        <span className="price__old">{oldprice} руб</span>
                        <span className="price__current">{price} руб</span>
                    </div>
                    <button
                        className="card__button add-button btn"
                    >
                        Добавить
                        </button>
                </div>
            </div>
        </div>

    )
}

export default Card
