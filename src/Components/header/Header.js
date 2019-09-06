import React, { useState } from 'react';
import './Header.css';
import { useDispatch } from 'react-redux';
import { addLocationAction } from '../../actions/locationActions';


function Header({ getLocation }) {


  //component state
  const [location, setLocation] = useState("");

  //dispatch to start the actions
  const dispatch = useDispatch();
  const addNewLocation = location => dispatch(addLocationAction(location));

  const submitLocation = async (e) => {
    e.preventDefault();
    const appid = '36e2fa16b70a4422ed609a5ad91f71f5';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${appid}&units=metric`;
    const response = await fetch(url);
    const result = await response.json();    
    // console.log(result.weather[0].description)
    if (result.name) {
      addNewLocation({
        location: location      
      })   
    }else{
      alert("Please type a valid city!");
    }
    // navigator.geolocation.getCurrentPosition(function(location) {
    //   console.log(location.coords.latitude);
    //   console.log(location.coords.longitude);
    //   console.log(location.coords.accuracy);
    // });
    
    setLocation("")
  }

  return (
    <div className="App">
      <header>
        <div className="header">

          <ul className="headerList">
            <li>
              <form onSubmit={submitLocation}>
                <input
                  type="text"
                  id="search_input"
                  name="city"
                  placeholder="type your city"
                  aria-label="type a city to get weather and latest news"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <button id="search_button" type="submit"><i className="fas fa-lg fa-search"></i></button>
              </form>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;