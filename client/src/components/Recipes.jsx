
import React, { Component } from 'react';
import Recipe from './recipe.jsx';
import axios from 'axios';
class RecipesContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            recipes: ""
        }
      
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/recipes.json')
        .then(response => {
             console.log(response.data)
             this.setState({
                recipes: response.data
            })
        })
        .catch(error => console.log(error))
     
    }

    render() {
        let recipes = this.state.recipes ||[]
        return (
            <div className="recipes-container">

                 { recipes === [] ? "Loading..." : recipes.map( item=> 
                 <Recipe title={item.title} 
                 ingredients={item.ingredients}
                 instruction={item.instruction}
                 origin={item.origin}
                 />

                    )}
               
            </div>
        )
    }
}

export default RecipesContainer;