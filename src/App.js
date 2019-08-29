import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import Home from './Components/Home/Home';


function App() {

  const getLocation = data => {
    console.log(data);
  }

  return (
    <div className="App">
      <Header
        getLocation={getLocation}
      />
      <Home></Home>
    </div>
  );
}

export default App;
