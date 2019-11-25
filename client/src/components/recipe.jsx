
import React, { Component } from 'react';
import Ingredients from './ingredients';

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
        <Ingredients {ingredients} />
        <div className="instructions-contain">
          {instruction}
        </div>
      </>
    )
}

export default Recipe;