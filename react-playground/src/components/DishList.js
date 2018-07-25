import React from 'react';
const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

class DishList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dishes: [] };
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(
        (dishes) => {
          this.setState({
            isLoaded: true,
            dishes
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
    console.log(this.state.dishes.meals[0].idMeal)
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <ul>
            {/* {this.state.dishes[0]} */}
          </ul>
        </div>
      );
    }
  }
}

export default DishList;
