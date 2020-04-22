import React, { Component } from 'react';
import './signIn.styles.scss';
import FormInput from '../formInput/formInput.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../firebase/firebase.utils'

class SignIN extends Component{
    constructor(props){
        super(props);
         this.state={
                email: '',
                password: ''
        }
    }
    handleSubmit = async event=>{
        event.preventDefault();

        const {email,password} = this.state;
        
        try{
           await auth.signInWithEmailAndPassword(email, password)
           this.setState({email:'',password:''})
        }
        catch(error){
            console.log(error);
    }
}

    handleChange=(event)=>{
        const {name,value} = event.target
        this.setState({[name]:value});
    }
    
    render(){
        return(
            <div className='sign-in'>
            <h2>I already have and account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
            <FormInput type='email' name='email' label='Email'  handleChange={this.handleChange} value={this.state.email} required/>
            <FormInput type='passwod' name='password' label='Password' handleChange={this.handleChange} value ={this.state.password} required/>
            <div className='buttons'>
            <CustomButton type='submit'>SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
            </div>
            </form>
        </div>
        )
    }
    
}

export default SignIN;