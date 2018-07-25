import React from 'react';
import DishItem from './DishItem.js'
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
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const dishItems = this.state.dishes.meals.map(function(dish) {
        return <DishItem dish={dish}/>
      });

      return (
        <ul>
          {dishItems}
        </ul>
      );
    }
  }
}

export default DishList;
