import React from 'react'
import {connect} from 'react-redux'
import {toggleHiddenCart} from '../../redux/cart/cart.action'
import {ReactComponent as ShoppingIcon} from '../assets/cart-icon.svg'
import './cart-icon.styles.scss'

const CartIcon=({toggleHiddenCart})=>
     (
        <div className='cart-icon' onClick={toggleHiddenCart}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
        </div>
    )

const mapDispatchToProps = dispatch => ({
    toggleHiddenCart:() => dispatch(toggleHiddenCart())
})

    export default connect(null,mapDispatchToProps)(CartIcon);