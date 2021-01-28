import React from 'react';
import { ReactComponent as Logo } from '../assets/images/svg/logo.svg';
import { ReactComponent as VkSvg } from '../assets/images/svg/header-vk.svg';
import { ReactComponent as InstaSvg } from '../assets/images/svg/header-instagram.svg';
import { ReactComponent as FbSvg } from '../assets/images/svg/header-facebook.svg';
import { ReactComponent as CartSvg } from '../assets/images/svg/cart.svg';

function Header() {
    return (
        <header className="header">
            <div className="header__background">
                <div className="container">
                    <nav className="header__nav">
                        <div className="header__logo logo">
                            <Logo />
                            <div className="logo__box">
                                <h1 className="logo__title">Товары для Мамочек</h1>
                                <h2 className="logo__subtitle">И их деток</h2>
                            </div>
                        </div>
                        <div className="header__burger">
                            <span></span>
                        </div>
                        <div className="header__menu">
                            <ul className="header__list list">
                                <li className="list__item"><a href="" className="list__link link">Главная</a></li>
                                <li className="list__item"><a href="" className="list__link link">О нас</a></li>
                                <li className="list__item"><a href="" className="list__link link">О товаре</a></li>
                            </ul>
                        </div>
                        <div className="header__contacts">
                            <a href="tel:+78009998877" className="header__phone link">8-800-999-88-77</a>
                            <a href="" className="header__email link">bobaka@cobaka.ru</a>
                        </div>
                        <div className="header__cart cart btn shd">
                            <CartSvg />
                            <span className="cart__delimetr"></span>
                            <div className="cart__box">
                                <span className="cart__count">10 шт</span>
                                <span className="cart__price">20 руб</span>
                            </div>
                        </div>
                    </nav>
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
                                        <VkSvg />
                                    </a></li>
                                    <li className="social__item"><a href="" className="social__link">
                                        <InstaSvg />
                                    </a></li>
                                    <li className="social__item"><a href="" className="social__link">
                                        <FbSvg />
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

