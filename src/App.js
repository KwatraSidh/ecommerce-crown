import React, { Component } from 'react';
import Header from './components/header/header.component'
import HomePage from "./components/homepage/homepage.component"
import ShopPage from "./components/shop/shop.component"
import {Switch,Route} from "react-router-dom"
import './App.css';
import SignInandSignUp from './components/signIn-signUp/sidnIn-signUp.component.page';
import {auth} from './components/firebase/firebase.utils'



class App  extends Component {
  constructor(){
    super();
    this.state={
      currentUser:null
     
    }
  }
  unsubscribeFromAuth= null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
      //console.log(this.unsubscribeFromAuth);
      //console.log(user);
    })
  }

  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
    console.log(this.unsubscribeFromAuth);
    
  }
  render(){
  return (
    <div>
    <Header currentUser={this.state.currentUser}/>
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/shop' component={ShopPage}/>
    <Route exact path='/signIn-signUp' component={SignInandSignUp}/>
    </Switch>
    </div>
  );
}
}

export default App;
