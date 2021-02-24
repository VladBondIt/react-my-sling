import React from 'react'

function FooterMenu() {
    return (
        <div className="footer__column footer__column_moved">
            <ul className="footer__list footer__list_moved">
                <li className="footer__item"><div className="footer__link link">Продукты</div></li>
                <li className="footer__item"><div className="footer__link link">Май Слинг</div></li>
                <li className="footer__item"><div className="footer__link link">Слинг с кольцом</div></li>
                <li className="footer__item"><div className="footer__link link">Слинг рюкзак</div></li>
            </ul>
            <ul className="footer__list footer__list_moved">
                <li className="footer__item"><div className="footer__link link">О нас</div></li>
                <li className="footer__item"><div className="footer__link link">Компания</div></li>
                <li className="footer__item"><div className="footer__link link">Акции</div></li>
                <li className="footer__item"><div className="footer__link link">Отзывы клиентов</div></li>
            </ul>
            <ul className="footer__list">
                <li className="footer__item footer__item_moved"><div className="footer__link link">Помощь</div></li>
                <li className="footer__item footer__item_moved"><div className="footer__link link">FAQ</div></li>
                <li className="footer__item footer__item_moved"><div className="footer__link link">Полезные статьи</div></li>
                <li className="footer__item footer__item_moved"><div className="footer__link link">Поддержка в Telegram</div>
                </li>
            </ul>
        </div>
    )
}

export default FooterMenu
