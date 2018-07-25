import React from 'react';

const DishItem = ({dish}) => {
  const imageUrl = dish.strMealThumb
  console.log(dish)
  return (
    <li className="list-group-item">
      <div>
        <div className="media-left">
          <img src={imageUrl} height="200px" width="200px"></img>
        </div>

        <div className="dishName">
          <div>{dish.strMeal}</div>
        </div>
      </div>
    </li>
  )};

export default DishItem;
