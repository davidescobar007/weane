import React from 'react';
import { useSelector } from 'react-redux';

function CurrencyCard() {

    const location = useSelector(state => state.location.location[0].location === undefined ? state.location.location[0] : state.location.location[0].location);
    const convertedValue = useSelector(state => state.currency.convertedCurrency[0] === undefined ? "" : state.currency.convertedCurrency[0].convertedValue);
    const currencyCode = useSelector(state => state.country.country[0] === undefined ? state.country.country : state.country.country[0].currency);
    const currencySimbol = useSelector(state => state.country.country[0] === undefined ? state.country.country : state.country.country[0].currencySimbol);
    // console.log(convertedValue);


    return (
        <article background="`http://openweathermap.org/img/wn/$col@2x.png`">
            <header>
                <h2>Currency used in {location}</h2>
            </header>
            <div>
                <h3>$ 1 USD = {currencySimbol}  {convertedValue} {currencyCode}</h3>
            </div>
        </article>
    );
}

export default CurrencyCard;