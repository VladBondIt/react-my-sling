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
import { setBasketId, setCartCountsId, setCartItems } from '../redux/actions/cart';
import loginService from '../services/loginService';
import Modal from './Modal/Modal';
import clientCartService from '../services/clientCartService';
import basketService from '../services/basketService';



function App() {
    const dispatch = useDispatch();

    const { previewObj, user, isAuth, basketId, countsIdItems, cartItems, modalShow } = useSelector(({ modal, login, cart }) => ({
        user: login.user,
        isAuth: login.isAuth,
        previewObj: modal.previewObj,
        modalShow: modal.modalShow,
        basketId: cart.basketId,
        countsIdItems: cart.countsIdItems,
        cartItems: cart.cartItems,
    }))

    if (user && user.role === 'USER' && !basketId) {
        basketService.getBasket(user.id).then(res => dispatch(setBasketId(res.id)))
    }
    if (cartItems.length === 0) {
        clientCartService.getCartItems(countsIdItems).then(res => dispatch(setCartItems(res)))
    }

    React.useEffect(() => {

        if (basketId) {
            basketService.getUserBasketItems(basketId).then(res => dispatch(setCartCountsId(res)))
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
    }, [basketId])


    return (
        <div className="wrapper">
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
