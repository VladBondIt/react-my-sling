import { combineReducers } from 'redux';
import categoryes from './categoryes';
import cards from './cards';

const rootReducer = combineReducers({
    categoryes,
    cards
});

export default rootReducer;