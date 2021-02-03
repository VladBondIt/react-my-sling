import { combineReducers } from 'redux';
import categoryes from './categoryes';
import cards from './cards';
import loader from './loader';
import cart from './cart';
import modal from './modal';

const rootReducer = combineReducers({
    categoryes,
    cards,
    loader,
    cart,
    modal
});

export default rootReducer;