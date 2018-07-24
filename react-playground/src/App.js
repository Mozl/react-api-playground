import React, { Component } from 'react';
import './App.css';
import Weather from '/home/louis/projects/react-api-playground/react-playground/src/components/Weather.js';
import Cocktail from '/home/louis/projects/react-api-playground/react-playground/src/components/Cocktail.js';

const divStyle = {
  fontSize: 70,
  margin: 20,
};

const pStyle = {
  margin: 0,
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={divStyle}>PLAYGROUND</h1>
          <h1 style={pStyle} className="App-title">Welcome to the React API Playground</h1>
        </header>
        <p className="weather-api">
          <Weather />
        </p>

        <img src= 'https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg' height="200px" width ="200px"></img>

        <p className="cocktail-api">
          <Cocktail />
        </p>
      </div>
    );
  }
}

export default App;
