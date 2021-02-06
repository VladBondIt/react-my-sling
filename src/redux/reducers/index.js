import { combineReducers } from 'redux';
import categoryes from './categoryes';
import cards from './cards';
import loader from './loader';
import cart from './cart';
import modal from './modal';
import search from './search';

const rootReducer = combineReducers({
    categoryes,
    cards,
    loader,
    cart,
    modal,
    search
});

export default rootReducer;