
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
             console.log(response.data)
             this.setState({
                recipes: response.data
            })
        })
        .catch(error => console.log(error))
     
    }

    render() {
        console.log(this.state);
        return (
            <div className="recipes-container">

                {this.state.recipes.map( item=> 
                  <h2>{item.title}</h2>
                    )}
               
            </div>
        )
    }
}

export default RecipesContainer;