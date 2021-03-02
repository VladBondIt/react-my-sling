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
import { ADMIN_ROUTE, CART_ROUTE, HOME_ROUTE } from '../consts/const';



function App() {
    const dispatch = useDispatch();

    const { previewObj, user, isAuth } = useSelector(({ modal, login }) => ({
        user: login.user,
        isAuth: login.isAuth,
        previewObj: modal.previewObj
    }))

    React.useEffect(() => {

        httpService.check().then((res) => {
            console.log(res);
        })
        // dispatch(setUser(true))
        // dispatch(setAuth(true))

    }, [])

    return (
        <div className="wrapper">
            <Header />
            <Switch>
                <Route exact path={HOME_ROUTE} component={Home} />
                {isAuth &&
                    <>
                        <Route exact path={CART_ROUTE} component={Cart} />
                        <Route exact path={ADMIN_ROUTE} component={Admin} />
                    </>
                }
                <Route exact path="/react-my-sling/cardpage">
                    {previewObj ? <CardPage /> : <Redirect to={HOME_ROUTE} />}
                </Route>
                <Redirect to={HOME_ROUTE} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;
