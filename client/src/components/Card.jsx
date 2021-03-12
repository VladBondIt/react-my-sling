import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../redux/actions/cart';
import { setPreviewObj } from '../redux/actions/modal';
import { useHistory } from 'react-router-dom';
import { setHomePage } from '../redux/actions/page';
import { CARD_PAGE_ROUTE, HOST } from '../consts/consts';
import AddButton from './AddButton';
import httpService from '../services/httpService';

function Card({ name, price, oldprice, img, id }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { user, cardInfos, basketId } = useSelector(({ login, cards, cart }) => ({
        ...login,
        ...cards,
        ...cart
    }))
    const [info, setInfo] = useState('')

    const handlerCardItem = async () => {
        const item = await httpService.addBasketItem(id, basketId)
        const items = await httpService.getBasketItems(basketId)

        console.log({ item, items });
        // dispatch(setCartItems(obj))
    }

    // const handlerPreview = () => {
    //     dispatch(setPreviewObj(obj))
    // }

    const handlerLink = (e) => {
        e.preventDefault()
        dispatch(setHomePage(false))
        history.push(CARD_PAGE_ROUTE + '/' + id)
    }

    const handlerInfo = () => {
        if (cardInfos) {
            setInfo(cardInfos.filter((value) => value.itemId === id)[0])
        }

    }
    useEffect(() => {
        handlerInfo()
    }, [])

    return (
        < div className="shop__card card shd" >
            <div className="card__imagebox">
                <img className="card__image" src={HOST + img} alt={name} />
                <div className="card__overlay overlay">
                    <a href='temp'
                        onClick={handlerLink}
                        className="overlay__button btn eff">Предпросмотр</a>
                </div>
            </div>
            <div className="card__infobox">
                <div className="card__textbox">
                    <h2 className="card__title">{name}</h2>
                    {/* <span className="card__subtitle">{info && info.description}</span> */}
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
                    <AddButton user={user} callback={handlerCardItem} />
                </div>
            </div>
        </div >

    )
}

export default Card
