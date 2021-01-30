import { combineReducers } from 'redux';
import categoryes from './categoryes';
import cards from './cards';
import loader from './loader';

const rootReducer = combineReducers({
    categoryes,
    cards,
    loader
});

export default rootReducer;