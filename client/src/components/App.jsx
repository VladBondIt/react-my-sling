import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Admin from '../pages/Admin';
import CardPage from '../pages/CardPage';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth, setUser } from '../redux/actions/login';
import { ADMIN_ROUTE, CARD_PAGE_ROUTE, CART_ROUTE, HOME_ROUTE } from '../consts/consts';
import { setBasketId, setCartItems } from '../redux/actions/cart';
import loginService from '../services/loginService';
import Modal from './Modal/Modal';
import clientCartService from '../services/clientCartService';
import basketService from '../services/basketService';
import { setSortPopupShow } from '../redux/actions/modal';



function App() {
    const dispatch = useDispatch();

    const { user, isAuth, basketId, modalShow } = useSelector(({ modal, login, cart }) => ({
        user: login.user,
        isAuth: login.isAuth,
        modalShow: modal.modalShow,
        basketId: cart.basketId,
        countsIdItems: cart.countsIdItems,
        cartItems: cart.cartItems,
    }))

    if (user && user.role === 'USER' && !basketId) {
        basketService.getBasket(user.id).then(res => dispatch(setBasketId(res.id)))
    }

    React.useEffect(() => {

        if (basketId) {
            // Проверяем есть у залогиненного пользователя итемы в корзине, при его входе
            basketService.getUserBasketItems(basketId)
                .then(res => {
                    if (res.length > 0) {
                        // если итемы есть, собираем их айдишники и каунтим их количество
                        const countsIdItems = res.reduce((acc, currentValue) => {
                            if (acc.length !== 0 && acc.some((value) => value.id === currentValue.itemId)) {
                                acc.forEach((value) => {
                                    if (value.id === currentValue.itemId) {
                                        value.count += 1
                                    }
                                })
                            } else {
                                acc.push({
                                    id: currentValue.itemId,
                                    count: 1
                                })
                            }
                            return acc;
                        }, [])
                        // получем итемы с базы по айдишникам 
                        clientCartService.getCartItems(countsIdItems).then(res => {
                            res = res.map((value) => {
                                // вытаскиваем ранее посчитаные каунты из объекта в отфильтрованом массиве
                                const count = countsIdItems.filter((item) => value.id === item.id)[0].count
                                // возвращаем модифицированый объект с полем каунт
                                return ({ ...value, count })
                            })
                            dispatch(setCartItems(res))
                        })
                    }
                })
        }

        if (!user) {
            dispatch(setAuth(false))
        } else {
            loginService.check()
                .then((res) => {
                    dispatch(setUser(user))
                    dispatch(setAuth(true))
                })
                .catch(e => {
                    dispatch(setUser(false))
                    dispatch(setAuth(false))
                })
        }
    }, [dispatch, user, basketId])

    const wrapperHandler = (e) => {
        const targetClass = e.target.classList[0]
        if (targetClass !== 'search__sort' && targetClass !== 'search__box'
            && targetClass !== 'search__type' && targetClass !== 'sort__item') {
            dispatch(setSortPopupShow(false))
        }
    }


    return (
        <div onClick={wrapperHandler} className="wrapper">
            <Header />
            <Switch>
                <Route exact path={HOME_ROUTE} component={Home} />
                <Route exact path={CARD_PAGE_ROUTE + '/:id'} component={CardPage} />
                {isAuth &&
                    <>
                        <Route exact path={CART_ROUTE} component={Cart} />
                        {user.role === "ADMIN" &&
                            < Route exact path={ADMIN_ROUTE} component={Admin} />}
                    </>
                }
                <Redirect to={HOME_ROUTE} />
            </Switch>
            <Footer />

            {modalShow && <Modal />}
        </div>
    )
}

export default App;
