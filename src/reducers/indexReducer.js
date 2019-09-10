import { combineReducers } from 'redux';
import  locationReducer  from './locationReducer'
import weatherReducer from './weatherReducer';
import currencyReducer from './currencyReducer.js';

export default combineReducers({
    location : locationReducer,
    weather : weatherReducer,
    country : currencyReducer,
})