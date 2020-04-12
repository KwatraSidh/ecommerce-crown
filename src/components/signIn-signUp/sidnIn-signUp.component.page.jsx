import React from 'react';
import './signIn-signUp.styles.scss'
import SignIN from '../signIn/signIn.component'
import SignUp from '../sign-up/signUp.component'

const SignInandSignUp = ()=>{
    return (
        <div className='sign-in-and-sign-up'>
        <SignIN/>
        <SignUp/>
        </div>
        
    )
}

export default SignInandSignUp;