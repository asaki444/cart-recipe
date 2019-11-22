
import React, { Component } from 'react';

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
                Recipes
            </div>
        )
    }
}

export default RecipesContainer;