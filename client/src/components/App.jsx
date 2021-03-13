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
import httpService from '../services/httpService';
import { ADMIN_ROUTE, CARD_PAGE_ROUTE, CART_ROUTE, HOME_ROUTE } from '../consts/consts';
import { setBasketId, setCartCountsId, setCartItems } from '../redux/actions/cart';



function App() {
    const dispatch = useDispatch();

    const { previewObj, user, isAuth, basketId, countsIdItems, cartItems } = useSelector(({ modal, login, cart }) => ({
        user: login.user,
        isAuth: login.isAuth,
        previewObj: modal.previewObj,
        basketId: cart.basketId,
        countsIdItems: cart.countsIdItems,
        cartItems: cart.cartItems,
    }))

    if (user && user.role === 'USER' && !basketId) {
        httpService.getBasket(user.id).then(res => dispatch(setBasketId(res.id)))
    }
    if (countsIdItems.length > 0 && basketId && cartItems.length === 0) {
        httpService.getCartItems(countsIdItems).then(res => dispatch(setCartItems(res)))
    }

    React.useEffect(() => {
        if (basketId) {
            httpService.getBasketItems(basketId).then(res => dispatch(setCartCountsId(res)))
        }

        if (!user) {
            dispatch(setAuth(false))
        } else {
            httpService.check()
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
        </div>
    )
}

export default App;
