
import React, { Component } from 'react';
import Recipe from './recipe.jsx';
import axios from 'axios';
class RecipesContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            recipes: []
        }
      
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/recipes.json')
        .then(response => {
            console.log(response)
            console.log("we made it!")
            // this.setState({
            //     recipes: response.recipes
            // })
        })
        .catch(error => console.log(error))
     
    }

    render() {
        return (
            <div className="recipes-container">
    hiii
                {/* {recipes.map( item=> 
                    <Recipe ingredients={item.ingredients} title={item.title} origin={item.origin} instructions={item.instructions} />
                    )} */}
               
            </div>
        )
    }
}

export default RecipesContainer;