import React from 'react';
import './App.css';
import RecipesContainer  from  './components/recipes';
import  SigninForm from './components/SignInForm';

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
        <Route path="/signin">
          <SigninForm/>
        </Route>
      </Switch>
    </Router>
  
  );
}

export default App;
