
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
    console.log(props)
    return(
      <>
        <div className="recipe-title">
            {title}
        </div>
        <div>
          {origin}
          </div>
        <div className="instructions-contain">
          {instruction}
        </div>
      </>
    )
}

export default Recipe;