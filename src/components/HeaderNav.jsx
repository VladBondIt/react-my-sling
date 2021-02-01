import React from 'react';
import { ReactComponent as Logo } from '../assets/images/svg/logo.svg';
import { ReactComponent as CartSvg } from '../assets/images/svg/cart.svg';
import { Link } from 'react-router-dom';



function HeaderNav() {
    return (
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
                    <li className="list__item"><Link to="/" className="list__link link">Главная</Link></li>
                    <li className="list__item"><a href="" className="list__link link">О нас</a></li>
                    <li className="list__item"><a href="" className="list__link link">О товаре</a></li>
                </ul>
            </div>
            <div className="header__contacts">
                <a href="tel:+78009998877" className="header__phone link">8-800-999-88-77</a>
                <a href="" className="header__email link">bobaka@cobaka.ru</a>
            </div>
            <Link to="/cart">
                <div className="header__cart cart-header btn shd">
                    <CartSvg />
                    <span className="cart-header__delimetr"></span>
                    <div className="cart-header__box">
                        <span className="cart-header__count">10 шт</span>
                        <span className="cart-header__price">20 руб</span>
                    </div>
                </div>
            </Link>
        </nav>
    )
}

export default HeaderNav