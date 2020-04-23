import React from 'react'
import {connect} from 'react-redux'
import {toggleHiddenCart} from '../../redux/cart/cart.action'
import {ReactComponent as ShoppingIcon} from '../assets/cart-icon.svg'
import './cart-icon.styles.scss'
import {selectCartItemsCount} from '../../redux/cart/cart.selector'
const CartIcon=({toggleHiddenCart,itemCount})=>
     (
        <div className='cart-icon' onClick={toggleHiddenCart}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
        </div>
    )

const mapDispatchToProps = dispatch => ({
    toggleHiddenCart:() => dispatch(toggleHiddenCart())
})

const mapStateToProps = (state) => ({
    itemCount : selectCartItemsCount(state)
    //cartItems.reduce((acumulatedValue,cartItems) => acumulatedValue+cartItems.quantity,0 )
})

    export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);