import React from 'react';
import CartItem from '../components/CartItem';
import HeaderNav from '../components/HeaderNav';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as CartEmpty } from '../assets/images/svg/cart-empty-black.svg';
import { ReactComponent as CartBack } from '../assets/images/svg/back-button.svg';
import { ReactComponent as CartClear } from '../assets/images/svg/clear-all.svg';
import { clearCart } from '../redux/actions/cart'
import CartModal from '../components/CartModal';
import { setModalShow, setModalType } from '../redux/actions/modal';

function Cart() {
    const dispatch = useDispatch();

    const { cartItems, totalPrice, cartModalShow, typeModal } = useSelector((state) => ({
        cartItems: state.cart.cartItems,
        totalPrice: state.cart.totalPrice,
        cartModalShow: state.modal.cartModalShow,
        typeModal: state.modal.typeModal,
    }))


    const handleClear = () => {
        dispatch(clearCart())
    }

    const handleSetModalShow = () => {
        dispatch(setModalShow(!cartModalShow))
    }

    const handleModal = (num) => {
        handleSetModalShow()
        dispatch(setModalType(num))
    }


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
                            <button onClick={() => handleModal(0)} className="cart__button shd btn cart__button_red">
                                    <CartClear className="cart__clearsvg" /> Очистить
                            </button>
                            </div>
                            <div className="cart__body">
                                <div className="cart__info">
                                    <span className="cart__text">Товар</span>
                                    <span className="cart__text">Характеристики</span>
                                    <span className="cart__text">Цена</span>
                                    <span className="cart__text">Количество</span>
                                    <span className="cart__text">Стоимость</span>
                                    <span className="cart__text">Отмена</span>
                                </div>
                                <div className="cart__itembox">
                                    {cartItems.map((cartItem) => <CartItem
                                        {...cartItem}
                                        key={cartItem.dataForKey}
                                    />)}
                                </div>

                            </div>
                            <div className="cart__buttons shd">
                                <button className="cart__button shd btn cart__button_green">
                                    Оформить заказ
                            </button>
                                <Link to="/react-my-sling/">
                                    <button className="cart__button shd btn">
                                        <CartBack className="cart__backsvg" /> Вернуться
                                    </button>
                                </Link>
                                <span className="cart__totalprice">Общая стоимость: {totalPrice} руб</span>
                            </div>
                            {cartModalShow
                                && <CartModal
                                    handleSetModalShow={handleSetModalShow}
                                    typeModal={typeModal}
                                    handleClear={handleClear}
                                />}
                        </>
                        :
                        <div className="cart__empty empty shd">
                            <div className="empty__title">Корзина пуста</div>
                            <div className="empty__imgbox">
                                <CartEmpty className="empty__svg" />
                            </div>
                            <Link to="/react-my-sling/">
                                <button className="cart__button shd btn">
                                    <CartBack className="cart__backsvg" /> Вернуться
                                </button>
                            </Link>
                        </div>}
                </div>
            </div>

        </>
    )
}

export default Cart
