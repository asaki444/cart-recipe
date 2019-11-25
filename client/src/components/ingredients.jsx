
import React, { Component } from 'react';

function Ingredients(props){
    return(
      {props.ingredients.map( item => <div className="ingredient-row">
        {item.amount} {item.name}
      </div>}
    )
}

export default Ingredients;