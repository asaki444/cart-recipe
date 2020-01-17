import React from 'react';
import './App.css';
import RecipesContainer  from  './components/recipes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>

     <Switch>
        <Route path="/recipes">
        <RecipesContainer />
        </Route>
        <Route path="/">
          
        </Route>
      </Switch>
    </Router>
  
  );
}

export default App;
