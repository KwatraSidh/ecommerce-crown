import React from 'react';
import './header.styles.scss'
import {ReactComponent as Logo} from '../assets/logo.svg'
import {Link} from 'react-router-dom';

const Header = () =>{
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
        </div>
        </div>
    )
}
export default Header;