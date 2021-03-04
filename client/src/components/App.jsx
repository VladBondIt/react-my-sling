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



function App() {
    const dispatch = useDispatch();

    const { previewObj, user, isAuth } = useSelector(({ modal, login }) => ({
        user: login.user,
        isAuth: login.isAuth,
        previewObj: modal.previewObj
    }))

    React.useEffect(() => {

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
    }, [])

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
