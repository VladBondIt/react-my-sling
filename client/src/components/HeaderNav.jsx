import React, { useEffect, useState } from 'react';
import { ReactComponent as Logo } from '../assets/images/svg/logo.svg';
import { ReactComponent as CartSvg } from '../assets/images/svg/cart.svg';
import { ReactComponent as Phone } from '../assets/images/svg/call-black.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FooterMenu from './FooterMenu';
import { setHomePage } from '../redux/actions/page';



function HeaderNav() {
    const dispatch = useDispatch();


    const { totalCount, totalPrice, cartModalShow, innerWidth, modalShow } = useSelector((state) => ({
        modalShow: state.modal.modalShow,
        cartItems: state.cart.cartItems,
        totalPrice: state.cart.totalPrice,
        totalCount: state.cart.totalCount,
        cartModalShow: state.modal.cartModalShow,
        innerWidth: state.width.innerWidth,
    }))



    const [offset, setOffset] = useState(0);
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, []);

    const handlerLink = () => {
        dispatch(setHomePage(false))
    }
    const handlerLinkToHome = () => {
        dispatch(setHomePage(true))
    }


    let cartClassName = "header__cart cart-header btn shd";
    let burgerClassName = "header__burger";
    let menuClassName = "header__menu";
    menuClassName += showBurgerMenu ? " active" : "";
    cartClassName += cartModalShow ? "header__cart cart-header btn shd" : "";
    if (showBurgerMenu) {
        burgerClassName += " active fixed";
        menuClassName += " active";
    } else {
        burgerClassName += "";
        menuClassName += "";
    }

    if (offset > 130) {
        cartClassName += " fixed";
        burgerClassName += " fixed";
    } else {
        cartClassName += "";
        burgerClassName += "";
    }

    const handlerBurger = () => {
        setShowBurgerMenu(!showBurgerMenu)
    }


    if (modalShow || showBurgerMenu) {
        document.querySelector('body').classList.add('lock');
    } else {
        document.querySelector('body').classList.remove('lock');
    }

    return (
        <nav className="header__nav">
            <div
                onClick={handlerBurger}
                className={burgerClassName}>
                <span></span>
            </div>
            <Link
                onClick={handlerLinkToHome}
                to="/react-my-sling/"
                className="header__logo logo">
                <Logo className="logo__svg" />
                <div className="logo__box">
                    <h1 className="logo__title">Товары для Мам</h1>
                    <h2 className="logo__subtitle">И их деток</h2>
                </div>
            </Link>
            <div className={menuClassName}>
                <ul className="header__list list">
                    <li className="list__item"><Link onClick={handlerLinkToHome} to="/react-my-sling/"><div className="list__link link">Главная</div></Link></li>
                    <li className="list__item"><div className="list__link link">О нас</div></li>
                    <li className="list__item"><div className="list__link link">О товаре</div></li>
                </ul>
                {innerWidth >= 540 ? null : <FooterMenu />}
            </div>
            <div className="header__contacts">
                {innerWidth >= 540
                    ?
                    <>
                        <a href="tel:+78009998877" className="header__phone link">8-800-999-88-77</a>
                        <div className="header__email link">bobaka@cobaka.ru</div>
                    </>
                    : <a href="tel:+78009998877"><Phone className="header__phone-svg" /></a>}


            </div>
            <Link
                onClick={handlerLink}
                to="/react-my-sling/cart">
                <div className={cartClassName}>
                    <CartSvg className="cart-header__svg" />
                    <span className="cart-header__delimetr"></span>
                    <div className="cart-header__box">
                        <span className="cart-header__count">{totalCount} шт</span>
                        <span className="cart-header__price">{totalPrice} руб</span>
                    </div>
                    <div className="cart-header__adaptive-count">{totalCount}</div>
                </div>
            </Link>
        </nav>
    )
}

export default HeaderNav;
