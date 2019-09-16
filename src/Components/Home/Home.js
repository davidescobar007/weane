import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCountryInfoAction } from '../../actions/countryActions';
import { convertedValueAction } from '../../actions/currencyActions';
import axios from 'axios';
import './Home.css';
import Weather from '../Weather/weatherCard';
import CountryCard from '../Country/countryCard';


function Home() {
    const countryCode = useSelector(state => state.weather.weather[0] === undefined ? state.weather.weather[0] : state.weather.weather[0].country);
    
    const icon = useSelector(state => state.weather.weather[0] === undefined ? state.weather.weather[0] : state.weather.weather[0].icon);

    useEffect(() => {
        getCountryInfo();
        //console.log("hey")
    })

    const dispatch = useDispatch();
    const addCountryInfo = (countryInfo) => dispatch(addCountryInfoAction(countryInfo));
    const addConvertedCurrency = (convertedCurrency) => dispatch(convertedValueAction(convertedCurrency));

    const getCountryInfo = async () => {
        if (countryCode !== undefined) {
            const urlCountry = `https://restcountries.eu/rest/v2/alpha/${countryCode}`;
            let info = await axios.get(urlCountry);
            // console.log(info.data.currencies[0].code);
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
            
                const urlCurrency = `https://free.currconv.com/api/v7/convert?q=USD_${info.data.currencies[0].code}&compact=ultra&apiKey=${currencyApiKey1}`;
                let currency = await fetch(urlCurrency);
                let currencyResult = await currency.json();
                const currencyResultToArray = Object.entries(currencyResult);
                console.log(currencyResultToArray[0][1]);
                addConvertedCurrency({
                    convertedValue: currencyResultToArray[0][1]
                });
        }

      
        
    }

    return (
        <div>
            <section>
                <div className="home_weather container">
                    <Weather></Weather>
                    <a href="#!" className="home_card child">
                        <article>
                            <header>
                                <h2>We are so sorry :(</h2>
                            </header>
                            <div>
                                <h4>This feature will be available soon</h4>
                                <h4></h4>
                            </div>
                        </article>
                    </a>
                    <a href="#!" className="home_card child">
                        <CountryCard></CountryCard>
                    </a>
                </div>
            </section>
            <section>
                <div className="home_news cointainer">
                    <div className="child news container">
                        News
                    </div>
                    <div className="child container">
                        <a className="child home_card" href="#!">
                            <article >
                                <h2>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</h2>
                                <p>lorem ipsum lorlorem ipsum lorem ipsum lorem ipsum</p>
                            </article>
                        </a>
                        <a className="child home_card" href="#!">
                            <article >
                                <h2>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</h2>
                                <p>lorem ipsum lorlorem ipsum lorem ipsum lorem ipsum</p>
                            </article>
                        </a>
                        <a className="child home_card" href="#!">
                            <article >
                                <h2>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</h2>
                                <p>lorem ipsum lorlorem ipsum lorem ipsum lorem ipsum</p>
                            </article>
                        </a>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default Home;
