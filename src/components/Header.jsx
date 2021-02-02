import React from 'react';
import { ReactComponent as VkSvg } from '../assets/images/svg/header-vk.svg';
import { ReactComponent as InstaSvg } from '../assets/images/svg/header-instagram.svg';
import { ReactComponent as FbSvg } from '../assets/images/svg/header-facebook.svg';
import HeaderNav from './HeaderNav';


function Header() {
    return (
        <header className="header">
            <div className="header__background">
                <div className="container">
                    <HeaderNav />
                    <div className="header__content">
                        <div className="header__row">
                            <h3 className="header__text header__text_left">Мы с радостью ответим на любые ваши вопросы</h3>
                            <h3 className="header__text header__text_right">Только лучшие и проверенные товары для вас
                        и ваших деточек!</h3>
                        </div>
                        <div className="header__row">
                            <div className="header__social social">
                                <ul className="social__list">
                                    <li className="social__item"><a href="" className="social__link">
                                        <VkSvg class="social__svg social__svg_vk btn" />
                                    </a></li>
                                    <li className="social__item"><a href="" className="social__link">
                                        <InstaSvg class="social__svg social__svg_insta btn" />
                                    </a></li>
                                    <li className="social__item"><a href="" className="social__link">
                                        <FbSvg class="social__svg social__svg_facebook btn" />
                                    </a></li>
                                </ul>
                            </div>
                            <div className="header__button">
                                <button className="button btn shd">Заказать</button>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </header >
    )
}

export default Header;

