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
import Home from './components/home';

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
        <Route path="/">
         <Home/>
        </Route>
      </Switch>
    </Router>
  
  );
}

export default App;
