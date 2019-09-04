import React, { useState } from 'react';
import './Header.css';

function Header({getLocation}) {

  //component state
  const [city, setCity] = useState(undefined);
  const [country, setCountry] = useState(undefined);

  const submitLocation = e => {
    e.preventDefault();
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
                  value={city}
                  onChange={(e)=>setCity(e.target.value) }
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