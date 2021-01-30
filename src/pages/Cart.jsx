import React from 'react';
import CartItem from '../components/CartItem';
import HeaderNav from '../components/HeaderNav';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart() {
    const { cartItems } = useSelector((state) => ({
        cartItems: state.cart.cartItems,
    }))

    console.log(cartItems);


    return (
        <>
            <div className="header__forcart">
                <div className="container">
                    <HeaderNav />
                </div>
            </div>
            <div className="cart">
                <div className="container">
                    <div className="cart__title shd">
                        Корзина Заказов
                    <button className="cart__button shd btn cart__button_red">
                            X  Очистить
                    </button>
                    </div>
                    <div className="cart__body">
                        <div className="cart__info">
                            <span className="cart__text">Товар</span>
                            <span className="cart__text">Цена</span>
                        </div>
                        <div className="cart__itembox">
                            {cartItems && cartItems.map((cartItem) => <CartItem {...cartItem} key={cartItem.dataForKey} />)}
                        </div>

                    </div>
                    <div className="cart__title shd">
                        <button className="cart__button shd btn cart__button_green">
                            Оформить заказ
                        </button>
                        <Link to="/">
                            <button className="cart__button shd btn">
                                Вернуться
                            </button>
                        </Link>
                        <span className="cart__totalprice">Общая стоимость</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
