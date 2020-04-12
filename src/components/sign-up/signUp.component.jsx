import React, { Component } from 'react';
import './signUp.styles.scss'
import FormInput from '../formInput/formInput.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth,createUserProfileDocument} from  '../firebase/firebase.utils'

class SignUp extends Component{
    constructor(){
        super();
        this.state={
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,displayName)

            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword : ''
            })
        }

        catch(error){
            console.log(error)
        }
    }

    handleChange = event =>{
        const {name,value} = event.target;
        this.setState({[name]:value})
    }

    render()
    {   const {displayName,email,password,confirmPassword} = this.state;

    return(
        <div className='sign-up'>
        <h2 className='title'>I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
        <FormInput type='name' label='Name' name='displayName' value={displayName} handleChange={this.handleChange}/>
        <FormInput type='email' label='Email' name='email' value={email} handleChange = {this.handleChange}/>
        <FormInput type='password' label ='Password' name='password' value ={password} handleChange={this.handleChange} />
        <FormInput type='password' label ='Confirm Password' name='confirmPassword' value ={confirmPassword} handleChange={this.handleChange}/>
        <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
        </div>
        )
    }

}

export default SignUp;