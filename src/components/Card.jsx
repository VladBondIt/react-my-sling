import React from 'react';
import ForCard from '../assets/images/for_card-cut.png'

function Card() {
    return (
        <div className="shop__card card shd">
            <div className="card__imagebox">
                <img className="card__image" src={ForCard} alt="" />
            </div>
            <div className="card__infobox">
                <div className="card__textbox">
                    <h2 className="card__title">Май Слинг Мигоша</h2>
                    <span className="card__subtitle">Дополнительный текст</span>
                </div>
                <div className="card__row">
                    <span className="card__size">Размер:</span>
                    <span className="card__size-count">140 см</span>
                </div>
                <div className="card__row">
                    <span className="card__material">Материал:</span>
                    <span className="card__material-value">Хлопок</span>
                </div>
                <div className="card__row">
                    <div className="card__price price">
                        <span className="price__old">2500 руб</span>
                        <span className="price__current">1500 руб</span>
                    </div>
                    <button className="card__button btn">
                        Добавить
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Card
