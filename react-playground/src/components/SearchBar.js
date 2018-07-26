import React from 'react';
let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

class SearchBar extends React.Component {
  state = {
    term: ""
  };

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
        <div>
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
            result.meals.map(({ strMeal, idMeal }) =>
              <div>{strMeal}</div>
            )
          }
        </div>
      </div>
    );
  }
}

export default SearchBar;
