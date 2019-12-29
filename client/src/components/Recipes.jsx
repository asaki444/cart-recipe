
import React, { Component } from 'react';
import Recipe from './recipe.jsx';
import axios from 'axios';
class RecipesContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            recipes: [],
            notLoaded: true
        }
      
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/recipes.json')
        .then(response => {
         
             this.setState({
                recipes: response.data,
                notLoaded:false
            })
            console.log(this.state)
        })
        .catch(error => console.log(error))
     
    }

    render() {
        const {recipes, notLoaded} = this.state; 
        return (
            <div className="recipes-container">
                {notLoaded && <p>Loading...</p>}
                 {recipes.length > 0 && recipes.map( item=> 
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