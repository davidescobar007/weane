import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addCurrencyAction} from '../../actions/currencyActions'

function  CurrencyCard(){
    const countryCode = useSelector(state => state.weather.weather[0] === undefined ? state.weather.weather[0] : state.weather.weather[0].country);
    console.log(countryCode);
    return (
        <article>
            <header>
                <h2>$ 1 USD = $ 3.000,42 COP</h2>
            </header>
            <div>
                <h4>+ 0.25% ↑</h4>
            </div>
        </article>
    );
}

export default CurrencyCard;