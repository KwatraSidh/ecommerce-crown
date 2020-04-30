import React from 'react';
import {connect} from 'react-redux' //HOC COMPONENT
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import './header.styles.scss'
import {ReactComponent as Logo} from '../assets/logo.svg'
import {auth} from '../firebase/firebase.utils'
import {Link} from 'react-router-dom';
import {selectCurrentUser} from '../../redux/user/user.selector'
import { selectCarthidden} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'


const Header = ({currentUser,hidden}) =>
    (
        <div className='header'>
        <div className='logo-container'>
            <Link to ='/'>
             <Logo/>
            </Link>
        </div>
        <div className='title'>
            <Link to='/'><h1>Lifestyle</h1></Link>
        </div>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            {/* <Link className='option' to='/contact'>CONTACT</Link> */}
            {currentUser?
            (<div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>):
            (<Link className='option' to='/signIn-signUp'>SIGN IN</Link>)}
            <CartIcon />
        </div>
        {hidden?<CartDropdown/>:null}
        </div>
    )


const mapStateToProps = createStructuredSelector ({
    currentUser : selectCurrentUser,
    hidden : selectCarthidden
})
export default connect(mapStateToProps)(Header);