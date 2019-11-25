
import React, { Component } from 'react';
import Recipe from './recipe.jsx';
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
            this.setState({
                recipes: response.data
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="recipes-container">

                {recipes.map( item=> 
                    <Recipe ingredients={item.ingredients} title={item.title} origin={item.origin} instructions={item.instructions} />
                    )}
               
            </div>
        )
    }
}

export default RecipesContainer;