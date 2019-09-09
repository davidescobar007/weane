import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchWeatherAction } from '../../actions/weatherActions';


function Weather() {

    // conditional to always return the state value, because first time the vale is undefined
    const location = useSelector(state => state.location.location[0].location === undefined ? state.location.location[0] : state.location.location[0].location);
    const temperature = useSelector(state => state.weather.weather[0] === undefined ? state.weather.weather[0] : state.weather.weather[0].temp);
    const description = useSelector(state => state.weather.weather[0] === undefined ? state.weather.weather[0] : state.weather.weather[0].description);
    const icon = useSelector(state => state.weather.weather[0] === undefined ? state.weather.weather[0] : state.weather.weather[0].icon);

    const weatherIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`
    
    const dispatch = useDispatch();
    const addWeather = (weather) => dispatch(searchWeatherAction(weather));

    const searchWeater = async () => {
        const appid = '36e2fa16b70a4422ed609a5ad91f71f5';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${appid}&units=metric`;
        const response = await fetch(url);
        const result = await response.json();
        // console.log(result)
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
        });
    }
    
    useEffect(() => {
        searchWeater();
    })
    return (
        <a href="#!" className="home_card container child">
            <div className="child">
                <header >
                    <h2>{location}</h2>
                </header>
                <div>
                    <h4>{temperature}</h4>
                    <h4>{description}</h4>
                </div>
            </div>
            <div className="child weather_icon">
                <img src={weatherIcon} alt={icon} height="100" width="100" />
            </div>
        </a>
    )
}

export default Weather;