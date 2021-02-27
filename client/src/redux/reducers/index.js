import { combineReducers } from 'redux';
import categoryes from './categoryes';
import cards from './cards';
import loader from './loader';
import cart from './cart';
import modal from './modal';
import search from './search';
import width from './width';
import page from './page';
import login from './login';

const rootReducer = combineReducers({
    categoryes,
    cards,
    loader,
    cart,
    modal,
    search,
    width,
    login,
    page
});

export default rootReducer;