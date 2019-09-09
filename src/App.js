import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

import store from './store';
import { Provider } from 'react-redux';
function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Home></Home>
      </div>
    </Provider>
  );
}

export default App;
