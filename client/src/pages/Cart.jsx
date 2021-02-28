import React from 'react';
import CartItem from '../components/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as CartEmpty } from '../assets/images/svg/cart-empty-black.svg';
import { ReactComponent as CartClear } from '../assets/images/svg/clear-all.svg';
import Modal from '../components/Modal/Modal';
import { setModalShow, setModalType } from '../redux/actions/modal';
import BackButton from '../components/BackButton';

function Cart() {
    const dispatch = useDispatch();

    const { cartItems, totalPrice, modalShow } = useSelector((state) => ({
        cartItems: state.cart.cartItems,
        totalPrice: state.cart.totalPrice,
        modalShow: state.modal.modalShow,
    }))


    const handlerClearModalShow = () => {
        dispatch(setModalShow(!modalShow))
        dispatch(setModalType(0))
    }
    const handlerCancelModalShow = () => {
        dispatch(setModalShow(!modalShow))
        dispatch(setModalType(1))
    }

    const handlerOrderModalShow = () => {
        dispatch(setModalShow(!modalShow))
        dispatch(setModalType(4))
    }


    return (
        <div className="cart mainbg">
            <div className="container">
                {cartItems.length > 0
                    ?
                    <>
                        <div className="cart__buttons shd">
                            Корзина Заказов
                                <button
                                onClick={handlerClearModalShow}
                                className="cart__button shd btn reff cart__button_red">
                                <CartClear className="cart__clearsvg" /> Очистить
                                </button>
                        </div>
                        <div className="cart__body">
                            {/* <div className="cart__info">
                                    <span className="cart__text">Товар</span>
                                    <span className="cart__text">Характеристики</span>
                                    <span className="cart__text">Цена</span>
                                    <span className="cart__text">Количество</span>
                                    <span className="cart__text">Стоимость</span>
                                    <span className="cart__text">Отмена</span>
                                </div> */}
                            <div className="cart__itembox">
                                {cartItems.map((cartItem) => <CartItem
                                    {...cartItem}
                                    handlerCancelModalShow={handlerCancelModalShow}
                                    key={cartItem.dataForKey}
                                />)}
                            </div>

                        </div>
                        <div className="cart__buttons shd">
                            <div className="cart__box">
                                <button
                                    onClick={handlerOrderModalShow}
                                    className="cart__button shd btn cart__button_green geff">
                                    Оформить заказ
                                </button>
                                <BackButton className={"cart__button shd btn eff"} />
                            </div>
                            <span className="cart__totalprice">Общая стоимость: {totalPrice} руб</span>
                        </div>
                    </>
                    :
                    <div className="cart__empty empty shd">
                        <div className="empty__title">Корзина пуста</div>
                        <div className="empty__imgbox">
                            <CartEmpty className="empty__svg" />
                        </div>
                        <BackButton className={"cart__button shd btn eff"} />
                    </div>}
                {modalShow && <Modal />}
            </div>
        </div>
    )
}

export default Cart
