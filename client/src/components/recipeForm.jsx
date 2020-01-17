import React, { Component } from 'react';
 
function RecipeForm (props){
    const ingredients = props;
    console.log(ingredients);
    return(
        <form>
        <label>
   Title:
        <input type="text" name="title" />
        </label>
    <label>
        Amount:
        <input type="integer" name="amount"/>
    </label>
    <label>
        Ingredient:
        <input type="text" name="ingredients"/>
    </label>
    <label>
        Instructions
        <input type="text" name="instructions"/>
    </label>
     <input type="submit" value="Submit" />
</form>
    )
}

export default RecipeForm;