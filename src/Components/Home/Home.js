import React from 'react'
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { addLocationAction } from '../../actions/locationActions';

function Home() {
    
    const location = useSelector(state => state.location[0].location === undefined ? state.location : state.location[0].location);
    
    console.log(location);
    //dispatch to start the action 
    const dispatch = useDispatch();
    const addNewLocation = location => dispatch(addLocationAction(location));

    const submitLocation = async (e) => {
        e.preventDefault();
        const appid = '36e2fa16b70a4422ed609a5ad91f71f5';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${appid}&units=metric`;
        const response = await fetch(url);
        const result = await response.json();
        if (result.name) {
            addNewLocation({
                temperature: result.main.temp,
                description: result.weather[0].description
            })
        } else {
            alert("Please type a valid city!");
        }        
    }


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
                                <h4>{}</h4>
                                <h4>{}</h4>
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
