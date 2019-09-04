import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import Home from './Components/Home/Home';

import store from './store';
import { Provider } from 'react-redux';
function App() {

  const getLocation = data => {
    console.log(data);
  }

  return (
    <Provider store={store}>
      <div className="App">
        <Header
          getLocation={getLocation}
        />
        <Home></Home>
      </div>
    </Provider>
  );
}

export default App;
