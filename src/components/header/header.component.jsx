import React from 'react';
import './header.styles.scss'
import {ReactComponent as Logo} from '../assets/logo.svg'
import {auth} from '../firebase/firebase.utils'
import {Link} from 'react-router-dom';

const Header = ({currentUser}) =>{
    return(
        <div className='header'>
        <div className='logo-container'>
            <Link to ='/'>
                <Logo/>
            </Link>
        </div>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option'>CONTACT</Link>
            {currentUser?<div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>:<Link className='option' to='/signIn-signUp'>SIGN IN</Link>}
            
        </div>
        </div>
    )
}
export default Header;