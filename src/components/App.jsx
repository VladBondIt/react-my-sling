import React from 'react';
import Footer from './Footer';

import { Redirect, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import CardPage from '../pages/CardPage';
import { useSelector } from 'react-redux';



function App() {

    const previewObj = useSelector(({ modal }) => modal.previewObj)

    return (
        <div className="wrapper">
            <Route exact path="/react-my-sling/" component={Home} />
            <Route exact path="/react-my-sling/cart" component={Cart} />
            <Route exact path="/react-my-sling/cardpage">
                {previewObj ? <CardPage /> : <Redirect to="/react-my-sling/" />}
            </Route>
            <Footer />
        </div>
    )
}

export default App;
