import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCountryInfoAction } from '../../actions/countryActions';
import { convertedValueAction } from '../../actions/currencyActions';
import { searchNewsAction } from '../../actions/newsActions'
import axios from 'axios';
import uuid from 'uuid/v4';
import './Home.css';
import Weather from '../Weather/weatherCard';
import CountryCard from '../Country/countryCard';
import News from '../News/News';


function Home() {
    const countryCode = useSelector(state => state.weather.weather[0] === undefined ? state.weather.weather[0] : state.weather.weather[0].country);
    const icon = useSelector(state => state.weather.weather[0] === undefined ? state.weather.weather[0] : state.weather.weather[0].icon);
    const location = useSelector(state => state.location.location[0].location === undefined ? state.location.location[0] : state.location.location[0].location);

    useEffect(() => {
        getCountryInfo();
        getNews();
        //console.log("hey")
    })

    const dispatch = useDispatch();
    const addCountryInfo = (countryInfo) => dispatch(addCountryInfoAction(countryInfo));
    const addConvertedCurrency = (convertedCurrency) => dispatch(convertedValueAction(convertedCurrency));
    const addNews = (news) => dispatch(searchNewsAction(news));

    const getCountryInfo = async () => {
        if (countryCode !== undefined) {
            const urlCountry = `https://restcountries.eu/rest/v2/alpha/${countryCode}`;
            const info = await axios.get(urlCountry);
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

            const urlCurrency = `https://free.currconv.com/api/v7/convert?q=USD_${info.data.currencies[0].code}&compact=ultra&apiKey=${currencyApiKey}`;
            let currency = await fetch(urlCurrency);
            let currencyResult = await currency.json();
            const currencyResultToArray = Object.entries(currencyResult);
            // console.log(currencyResultToArray[0][1]);
            addConvertedCurrency({
                convertedValue: currencyResultToArray[0][1]
            });
        }
    }

    const getNews = async () => {
        if (location !== undefined) {
            const newsApiKey = "baf89e91a399451dbf982a015897aea1"
            const newsUrl = `https://newsapi.org/v2/everything?q=${location}%20${countryCode}&apiKey=${newsApiKey}`;
            const newsResult = await axios.get(newsUrl);
            // console.log(newsResult.data.articles);
            const news = [];
            for (const i of newsResult.data.articles) {
                news.push(i);
            }
            addNews({
                id : uuid,
                news: news
            })
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
                    <div className="child news_header_title container">
                        See what is happening in {location}
                    </div>
                    <News></News>
                </div>
            </section>
        </div>
    )
}
export default Home;
