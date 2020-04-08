import React from 'react';
import HomePage from "./components/homepage/homepage.component"
import {Switch,Route} from "react-router-dom"
import './App.css';

const HatsPage = () => {
  return (
    <div>
      <h1>This is Hats Page</h1>
    </div>
  )
}

function App() {
  return (
    <div>
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/shop/hats' component={HatsPage}/>
    </Switch>
    </div>
  );
}

export default App;
