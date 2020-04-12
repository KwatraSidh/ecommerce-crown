import React, { Component } from 'react';
import Header from './components/header/header.component'
import HomePage from "./components/homepage/homepage.component"
import ShopPage from "./components/shop/shop.component"
import {Switch,Route} from "react-router-dom"
import './App.css';
import SignInandSignUp from './components/signIn-signUp/sidnIn-signUp.component.page';
import {auth, createUserProfileDocument} from './components/firebase/firebase.utils'



class App  extends Component {
  constructor(){
    super();
    this.state={
      currentUser:null
     
    }
  }
  unsubscribeFromAuth= null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState = ({
            currentUser : {
              id : snapshot.id,
              ...snapshot.data()}
          })//,() => console.log(this.state))
          console.log(this.state) //pertains to null use the call back function instead
        })
      }
      
      this.setState({currentUser:userAuth})
     
      //console.log(this.unsubscribeFromAuth);
      //createUserProfileDocument(user);
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
