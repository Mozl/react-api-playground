import React, { Component } from 'react';
import './App.css';
import Weather from '../src/components/Weather';
import Cocktail from '../src/components/Cocktail';
import SearchBar from '../src/components/SearchBar'
import DishList from '../src/components/DishList';
const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const divStyle = {
  fontSize: 70,
  margin: 20,
};

const pStyle = {
  margin: 0,
};

class App extends Component {

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(
        (dishes) => {
          this.setState({
            isLoaded: true,
            dishes: dishes
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
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={divStyle}>PLAYGROUND</h1>
          <h1 style={pStyle} className="App-title">Welcome to the React API Playground</h1>
        </header>
        <div className="weather-api">
          <Weather />
        </div>

        <img src='https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg' height="200px" width ="200px"></img>

        <div className="cocktail-api">
          <Cocktail />
        </div>

        <div>
          <SearchBar />
        </div>

        <div>
          <DishList />
        </div>
      </div>
    );
  }
}

export default App;
