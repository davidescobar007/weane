import React, { useEffect, useState } from 'react'
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchWeatherAction } from '../../actions/weatherActions';


function Home() {
    
    // conditional to always return the state value, because first time the vale is undefined
    const location = useSelector(state => state.location.location[0].location === undefined ? state.location.location[0] : state.location.location[0].location);
    const temperature = useSelector(state => state.weather.weather[0] === undefined ? state.weather.weather[0] : state.weather.weather[0].temp);
    const description = useSelector(state => state.weather.weather[0] === undefined ? state.weather.weather[0] : state.weather.weather[0].description);

    console.log(temperature)
    const dispatch = useDispatch();
    const addWeather = (weather) => dispatch(searchWeatherAction(weather));

    const searchWeater = async () => {
        const appid = '36e2fa16b70a4422ed609a5ad91f71f5';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${appid}&units=metric`;
        const response = await fetch(url);
        const result = await response.json();
        
        addWeather({
            city: result.name,
            country: result.sys.country,
            temp: result.main.temp,
            min_tem: result.main.temp_min,
            max_temp: result.main.temp_max,
            pressure: result.main.pressure,
            humidity: result.main.humidity,
            description: result.weather[0].description,
            icon: result.weather[0].icon,
        });}
        useEffect(() => {
            searchWeater();
        })



        return (
            <div>
                <section>
                    <div className="home_weather container">
                        <a href="#!" className="home_card child">
                            <article>
                                <header>
                                    <h2>{location}</h2>
                                </header>
                                <div>
                                    <h4>{temperature}</h4>
                                    <h4>{description}</h4>
                                </div>
                            </article>
                        </a>
                        <a href="#!" className="home_card child">
                            <article>
                                <header>
                                    <h2>Bucaramanga</h2>
                                </header>
                                <div>
                                    <h4>29°c</h4>
                                    <h4>Sunny</h4>
                                </div>
                            </article>
                        </a>
                        <a href="#!" className="home_card child">
                            <article>
                                <header>
                                    <h2>Bucaramanga</h2>
                                </header>
                                <div>
                                    <h4>29°c</h4>
                                    <h4>Sunny</h4>
                                </div>
                            </article>
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
