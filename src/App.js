import React, { Component } from 'react';
import Header from './components/header/header.component'

import HomePage from "./components/homepage/homepage.component"
import ShopPage from "./components/shop/shop.component"
import CheckoutPage from "./components/checkout-page/checkout.component"

import {Switch,Route,Redirect} from "react-router-dom"
import './App.css';
import SignInandSignUp from './components/signIn-signUp/sidnIn-signUp.component.page';
import {auth, createUserProfileDocument} from './components/firebase/firebase.utils'
//redux imports//
import {connect} from 'react-redux'
import  {setCurrentUser} from './redux/user/user.action'




class App  extends Component {
 
  unsubscribeFromAuth= null;

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id : snapshot.id,
              ...snapshot.data()
          })//,() => console.log(this.state))
          //console.log(this.state) //pertains to null use the call back function instead
        })
      }
      
      setCurrentUser(userAuth)
     
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
    <Header />
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/shop' component={ShopPage}/>
    <Route exact path='/checkout' component={CheckoutPage}/>
    <Route exact path='/signIn-signUp' render = {() => this.props.currentUser?(<Redirect to='/' />):(<SignInandSignUp/>) }/>   
    </Switch>
    </div>
  );
}
}

const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))

})

export default connect(mapStateToProps,mapDispatchToProps)(App);
