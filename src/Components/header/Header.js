import React, { useState } from 'react';
import './Header.css';

function Header({getLocation}) {

  const [state, setState] = useState({
    city: undefined
  })

  const handleChange = e => {
    setState({
      city: e.target.value
    })
  }

  const data = e => {
    e.preventDefault();
    getLocation(state);
  }

  return (
    <div className="App">
      <header>
        <div className="header">

          <ul className="headerList">
            <li>
              <form onSubmit={getLocation}>
                <input
                  type="text"
                  id="search_input"
                  name="city"
                  placeholder={state.city}
                  aria-label="type a city to get weather and latest news"
                  onChange={handleChange}
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