import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCountryInfoAction } from '../../actions/countryActions';
import axios from 'axios';

function CurrencyCard() {
    const countryCode = useSelector(state => state.weather.weather[0] === undefined ? state.weather.weather[0] : state.weather.weather[0].country);
    const location = useSelector(state => state.location.location[0].location === undefined ? state.location.location[0] : state.location.location[0].location);
    const currency1 = useSelector(state => state.country);
    console.log(currency1);

    const dispatch = useDispatch();
    const addCountryInfo = (countryInfo) => dispatch(addCountryInfoAction(countryInfo));

    const getCountryInfo = async () => {
        const url = `https://restcountries.eu/rest/v2/alpha/${countryCode}`;
        let info = await axios.get(url);
        // console.log(info.data);
        addCountryInfo({
            country: info.data.name,
            currency: info.data.currencies[0].code,
            currencySimbol: info.data.currencies[0].symbol,
            flag: info.data.flag,
        });
    }
    useEffect(()=>{

    })
    
    const getCurrencyConverter = async () => {
        const currencyApiKey = "f017f25d741fe49e1536"; //jorgatsu@yopmawil.com 
        const currencyApiKey1 = "56b0d0350418bb3975fe"; //jorgatsu1@yopmawil.com 
        const url = `https://free.currconv.com/api/v7/convert?q=USD_COP&compact=ultra&apiKey=${currencyApiKey1}`;
        let currency = await axios.get(url);
        // console.log(currency.data.USD_COP);
        addCountryInfo({
            convertedValue: currency.data
        })
    }

    return (
        <article>
            <header>
                <h2>Currency used in {location}</h2>
            </header>
            <div>
                <h3>$ 1 USD = $ 3.000,42 {}</h3>
                <h4>+ 0.25% ↑</h4>
            </div>
        </article>
    );
}

export default CurrencyCard;