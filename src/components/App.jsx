import React from 'react';
import Footer from './Footer';

import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';

function App() {
    return (
        <div className="wrapper">
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Footer />
        </div>
    )
}

export default App;
