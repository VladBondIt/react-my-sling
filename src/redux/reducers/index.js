import { combineReducers } from 'redux';
import categoryes from './categoryes';
import cards from './cards';
import loader from './loader';
import cart from './cart';

const rootReducer = combineReducers({
    categoryes,
    cards,
    loader,
    cart
});

export default rootReducer;