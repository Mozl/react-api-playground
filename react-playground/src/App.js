import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import './App.css';
import Weather from '../src/components/Weather';
import Cocktail from '../src/components/Cocktail';
import SearchBar from '../src/components/SearchBar';
import Crypto from '../src/components/Crypto';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const divStyle = {
  fontSize: 70,
  margin: 20,
}

const pStyle = {
  margin: 0,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: [],
    };
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(
        (dishes) => {
          this.setState({
            isLoaded: true,
            dishes: dishes,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { dishes } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h2 style={divStyle}>PLAYGROUND</h2>
        </header>
        <h1 className="App-title">Welcome to the React API Playground by
          <a href="https://github.com/Mozl"> Mozl</a>
        </h1>

        <div className="weather-api">
          <Weather />
        </div>

        <img src='https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg' height="200px" width ="200px"></img>

        <div className="cocktail-api">
          <Cocktail />
        </div>

        <div>
          <SearchBar dishes={dishes.meals}/>
        </div>
        <h2>
          Cryptocurrency API
        </h2>
        <div className="crypto">
          <Crypto />
        </div>
      </div>
    );
  }
}

export default App;
