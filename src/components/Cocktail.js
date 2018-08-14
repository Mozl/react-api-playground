import React from 'react';
let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

const divStyle = {
  marginTop: 20,
};

class Cocktail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(url)
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
    const { error, isLoaded, result } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div style={divStyle}>
          <div>CocktailDBAPI - Margarita instructions:</div>
          <br></br>
          <div>{result.drinks[0].strInstructions}</div>
        </div>
      );
    }
  }
}

export default Cocktail;
