import { combineReducers } from 'redux';
import  locationReducer  from './locationReducer'
import weatherReducer from './weatherReducer';
import countryReducer from './countryReducer';
import currencyReducer from './currencyReducer'
import newsReducer from './newsReducer'

export default combineReducers({
    location : locationReducer,
    weather : weatherReducer,
    country : countryReducer,
    currency : currencyReducer,
    news : newsReducer
})