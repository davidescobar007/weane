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
    const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${appid}&units=metric`;
    const cityResponse = await fetch(cityUrl);
    const cityResult = await cityResponse.json();
    if (cityResult.name) {
      addNewLocation({
        location: cityResult.name
      });
    } else {
      alert("Please type a valid city!");
    }
    setLocation("");
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