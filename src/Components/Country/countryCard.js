import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCountryInfoAction } from '../../actions/countryActions';
import { convertedValueAction } from '../../actions/currencyActions';
import axios from 'axios';

function CurrencyCard() {
    const countryCode = useSelector(state => state.weather.weather[0] === undefined ? state.weather.weather[0] : state.weather.weather[0].country);
    const location = useSelector(state => state.location.location[0].location === undefined ? state.location.location[0] : state.location.location[0].location);
    const currencyCode = useSelector(state => state.country.country[0] === undefined ? state.country.country : state.country.country[0].currency);
    const convertedValue = useSelector(state => state.currency.convertedCurrency[0] === undefined? state.currency : 2);
    console.log(currencyCode);
    const icon = useSelector(state => state.weather.weather[0] === undefined ? state.weather.weather[0] : state.weather.weather[0].icon);

    useEffect(() => {
        getCountryInfo();
        // getCurrencyConverter();
    },[])

    const dispatch = useDispatch();
    const addCountryInfo = (countryInfo) => dispatch(addCountryInfoAction(countryInfo));
    const addConvertedCurrency = (convertedCurrency) => dispatch(convertedValueAction(convertedCurrency));

    const getCountryInfo = async () => {
        const urlCountry = `https://restcountries.eu/rest/v2/alpha/${countryCode}`;
        let info = await axios.get(urlCountry);
        console.log(info.data.currencies[0].code);
        addCountryInfo({
            country: info.data.name,
            currency: info.data.currencies[0].code,
            currencySimbol: info.data.currencies[0].symbol,
            flag: info.data.flag,
        });
        const currencyApiKey = "f017f25d741fe49e1536"; //jorgatsu@yopmawil.com 
        const currencyApiKey1 = "56b0d0350418bb3975fe"; //jorgatsu1@yopmawil.com         
        const currencyApiKey2 = "68cea0e6d043806969b7"; //jorgatsu2@yopmawil.com         
        const currencyApiKey3 = "8bc4937eceb0d16c950d"; //jorgatsu3@yopmawil.com         
        const currencyApiKey4 = "35d0626d49ce6d46bbe9"; //jorgatsu4@yopmawil.com         
        const currencyApiKey5 = "de6bd5f52e288ad885f8"; //jorgatsu5@yopmawil.com 
        const urlCurrency = `https://free.currconv.com/api/v7/convert?q=USD_${info.data.currencies[0].code}&compact=ultra&apiKey=${currencyApiKey}`;
        let currency = await axios.get(urlCurrency);
        console.log(currency.data);
        addConvertedCurrency({
            convertedValue: currency.data
        });
    }


    const getCurrencyConverter = async () => {
        const currencyApiKey = "f017f25d741fe49e1536"; //jorgatsu@yopmawil.com 
        const currencyApiKey1 = "56b0d0350418bb3975fe"; //jorgatsu1@yopmawil.com         
        const currencyApiKey2 = "68cea0e6d043806969b7"; //jorgatsu2@yopmawil.com         
        const currencyApiKey3 = "8bc4937eceb0d16c950d"; //jorgatsu3@yopmawil.com 
        const url = `https://free.currconv.com/api/v7/convert?q=USD_${currencyCode}&compact=ultra&apiKey=${currencyApiKey3}`;
        let currency = await axios.get(url);
        // console.log(currency.data);
        addConvertedCurrency({
            convertedValue: currency.data
        })
    }

    return (
        <article background="`http://openweathermap.org/img/wn/$col@2x.png`">
            <header>
                <h2>Currency used in {location}</h2>
            </header>
            <div>
                <h3>$ 1 USD = $  {currencyCode}</h3>
                <h4>+ 0.25% ↑</h4>
            </div>
        </article>
    );
}

export default CurrencyCard;