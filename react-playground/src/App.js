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
  constructor(props) {
    super(props);

    this.state = {
      dishes: [],
      selectedDish: null
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
            selectedDish: dishes[0]
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
    const { dishes, selectedDish } = this.state;

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
          <SearchBar dishes={dishes.meals}/>
        </div>

        {/* <div>
          <DishList
            dishes={selectedDish}
            onDishSelect={selectedDish => this.setState({selectedDish})}
            />
        </div> */}
      </div>
    );
  }
}

export default App;
