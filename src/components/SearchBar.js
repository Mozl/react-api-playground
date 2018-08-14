import React from 'react';
let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const divStyle = {
  marginTop: 20,
};

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  searchAPI = (searchTerm) => {
    this.setState({
      term: searchTerm
    })
    fetch(`${url}${searchTerm}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            result: result
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
    const { result } = this.state;

    console.table(result && result.meals)

    return (
      <div>
        <h2 style={divStyle}>
          Search for a meal below:
        </h2>
        <div style={divStyle}>
          <input
            value={this.state.term}
            onChange={event => this.searchAPI(event.target.value)} />
        </div>
        <div>
          {result &&
            result.meals.map(({ strMealThumb, idMeal }) =>
              <img height="200px" width="200px" key={idMeal} src={strMealThumb}></img>
            )
          }
        </div>

        <div>
          {result &&
            result.meals.map(({ strMeal }) =>
              <div>{strMeal}</div>
            )
          }
        </div>

        <button onClick={this.toggleHidden.bind(this)}>
          Show recipe
        </button>
          {this.state.isHidden && result &&
              result.meals.map(({ strInstructions }) =>
                <div>{strInstructions}</div>
              )
            }
      </div>
    );
  }
}

export default SearchBar;
