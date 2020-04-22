import React from 'react';
import {connect} from 'react-redux' //HOC COMPONENT
import CardIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import './header.styles.scss'
import {ReactComponent as Logo} from '../assets/logo.svg'
import {auth} from '../firebase/firebase.utils'
import {Link} from 'react-router-dom';


const Header = ({currentUser,hidden}) =>{
    return(
        <div className='header'>
        <div className='logo-container'>
            <Link to ='/'>
                <Logo/>
            </Link>
        </div>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {currentUser?(<div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>):(<Link className='option' to='/signIn-signUp'>SIGN IN</Link>)}
            <CardIcon></CardIcon>
        </div>
        {hidden?<CartDropdown/>:null}
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser : state.user.currentUser,
    hidden : state.cart.hidden
})
export default connect(mapStateToProps)(Header);