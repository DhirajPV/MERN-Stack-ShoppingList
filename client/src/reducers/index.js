import {  combineReducers  } from 'redux';
import itemReducers from './itemReducer.js';

export default combineReducers({
    item: itemReducers
});