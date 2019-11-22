
import React, { Component } from 'react';

function Recipe(props){
    const {
       title,
       ingredients,
       instruction,
       origin
    }
    = props;

    return(
      <>
        <div className="recipe-title">
            {title}
        </div>
        <div>
            {ingredients.map( item => 
               {item.amount; item.name}
                )}
        </div>
      </>
    )
}

export default Recipe;