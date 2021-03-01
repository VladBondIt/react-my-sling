import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Admin from '../pages/Admin';
import CardPage from '../pages/CardPage';
import { useSelector } from 'react-redux';



function App() {

    const { previewObj, user } = useSelector(({ modal, login }) => ({
        user: login.user,
        previewObj: modal.previewObj
    }))

    return (
        <div className="wrapper">
            <Header />
            <Switch>
                <Route exact path="/react-my-sling/" component={Home} />
                <Route exact path="/react-my-sling/cart" component={Cart} />
                <Route exact path="/react-my-sling/admin" component={Admin} />
                <Route exact path="/react-my-sling/cardpage">
                    {previewObj ? <CardPage /> : <Redirect to="/react-my-sling/" />}
                </Route>
                <Redirect to="/react-my-sling/" />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;
