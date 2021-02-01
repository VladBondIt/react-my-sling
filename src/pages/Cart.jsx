import React from 'react';
import CartItem from '../components/CartItem';
import HeaderNav from '../components/HeaderNav';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as CartEmpty } from '../assets/images/cart-empty-black.svg';

function Cart() {
    const { cartItems } = useSelector((state) => ({
        cartItems: state.cart.cartItems,
    }))


    return (
        <>
            <div className="header__forcart">
                <div className="container">
                    <HeaderNav />
                </div>
            </div>
            <div className="cart">
                <div className="container">
                    {cartItems.length > 0
                        ?
                        <>
                            <div className="cart__buttons shd">
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
                                    {[...new Map(cartItems.map(obj => [obj["id"], obj])).values()]
                                        .map((cartItem) => <CartItem
                                            {...cartItem}
                                            key={cartItem.dataForKey}
                                        />)}
                                </div>

                            </div>
                            <div className="cart__buttons shd">
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
                        </>
                        :
                        <div className="cart__empty empty shd">
                            <div className="empty__title">Корзина пуста</div>
                            <div className="empty__imgbox">
                                <CartEmpty className="empty__svg" />
                            </div>
                        </div>}
                </div>
            </div>

        </>
    )
}

export default Cart
